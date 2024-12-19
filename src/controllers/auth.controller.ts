import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { findCustomer } from "../services/customer.service";
import { sign, verify } from "jsonwebtoken";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { generateReferalCode } from "../utils/generatereferralcode";
import { transporter } from "../services/mailer";
// import { findOrganizer } from "../services/organizer.service";
import { addMonths } from "date-fns";

export class AuthController {
  async loginCustomer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const customer = await findCustomer(data, data);

      if (!customer) throw { massage: "User not found !" };
      if (!customer.isVerified) throw { massage: "User not Verif !" };

      const isValidPass = await compare(password, customer.password);
      if (!customer) {
        throw { massage: "Incorrect Password" };
      }

      const payload = { id: customer.id, type: "user" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      console.log("Generated Token:", token);
      console.log("Token Payload:", payload);

      res
        .status(200)
        .cookie("token", token, {
          httpOnly: true,
          maxAge: 24 * 3600 * 1000,
          path: "/",
          secure: process.env.NODE_ENV === "production",
        })
        .send({ massage: "Login User Succesfully" });
    } catch (err) {
      console.error(err);
      res.status(400).send("Login Failed");
    }
  }

  //Register User

  async registerCustomer(req: Request, res: Response) {
    try {
      const { fullname, username, email, password, confirmPassword, referralCode } = req.body;

      if (password !== confirmPassword)
        throw { message: "Passwords do not match!" };

      const customer = await findCustomer(username, email);
      if (customer) throw { message: "Username or email has already been used" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      const newUserData: any = {
        fullname,
        username,
        email,
        password: hashPassword,
        referralCode: generateReferalCode(),
      };

      // Cek si Reveral Code nya
      if (referralCode) {
        const referer = await prisma.customer.findUnique({
          where: { referralCode },
        });
        if (!referer) throw { message: "Invalid referral code" };

        //plus point jika si reveral dipakai
        await prisma.customerPoint.update({
          where: { id: referer.id },
          data: { point: {} },
        });

        // persentase si kupon jika dipakai
        const coupon = await prisma.customerCoupon.create({
          data: {
            percentage: 10,
            isRedeem: false,
            expiredAt: addMonths(new Date(), 3),
          },
        });
        newUserData.percentage = coupon.percentage;
        newUserData.userCouponId = coupon.id;
        newUserData.refCodeBy = referer.id;

        // log untuk melihat hasil si referal dari siapa
        await prisma.refLog.create({
          data: {
            pointGet: 10000,
            expiredAt: addMonths(new Date(), 3),
            isUsed: false,
            user: {
              connect: { id: referer.id },
            },
          },
        });
      }

      // buat user baru dari hasil data
      const newCustomer = await prisma.customer.create({ data: newUserData });

      const payload = { id: newCustomer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const linkUser = `http://localhost:3000/verifyuser/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyUser.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({
        username,
        linkUser,
        refCode: newCustomer.referralCode,
      });

      // Mailer transport
      await transporter.sendMail({
        from: "dattariqf@gmail.com",
        to: email,
        subject: "Welcome To TIKO",
        html,
      });

      res.status(201).json({ massage: "Registration Succesfull" });
    } catch (err: any) {
      console.error(err);
      res.status(400).json({ massage: "Internal server error" });
    }
  }

  async verifyCustomer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedUser: any = verify(token, process.env.JWT_KEY!);
      await prisma.customer.update({
        data: { isVerified: true },
        where: { id: verifiedUser.id },
      });
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}
}