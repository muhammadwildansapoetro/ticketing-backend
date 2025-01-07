import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { findCustomer, findRefCode } from "../services/customer.service";
import { sign, verify } from "jsonwebtoken";
import { transporter } from "../services/mailer";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { findOrganizer } from "../services/organizer.service";
import { generator } from "../services/auth.service";
import dotenv from "dotenv";
dotenv.config();

export class AuthController {
  async registerCustomer(req: Request, res: Response) {
    try {
      let {
        fullname,
        password,
        confirmPassword,
        username,
        email,
        referralCodeBy,
      } = req.body;

      if (password != confirmPassword) throw { message: "Password not match" };

      const customer = await findCustomer(username, email);
      if (customer) throw { message: "Username or email has been used!" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      let newRefCode = generator();
      const refCode = await findRefCode(newRefCode);
      if (refCode) newRefCode = generator();

      if (referralCodeBy) {
        const isRefCode = await findRefCode(referralCodeBy);
        if (!isRefCode) throw { message: "ReferralCode is not found" };
      }

      if (referralCodeBy == "") referralCodeBy = null;

      // Create new customer
      const newCustomer = await prisma.customer.create({
        data: {
          fullname,
          username,
          email,
          password: hashPassword,
          referralCode: newRefCode,
          referralCodeBy,
        },
      });

      const payload = { id: newCustomer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      const link = `${process.env.BASE_URL_FE!}/customer/verify/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyCustomer.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ fullname, link });

      await transporter.sendMail({
        from: "mirzaaliyusuf45@gmail.com",
        to: email,
        subject: "Welcome to MatchTix",
        html,
      });

      res.status(201).send({
        message: "Registered successfully. Check your email to verify account.",
      });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async signInCustomer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const customer = await findCustomer(data, data);

      if (!customer) throw { message: "Customer not found" };
      if (!customer.isVerified)
        throw { message: "Customer not verified, please check your email" };

      const isValidPass = await compare(password, customer.password);
      if (!isValidPass) {
        throw { message: "Incorrect password" };
      }

      const payload = { id: customer.id, role: "customer" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const cus = { ...customer, role: "customer" };
      res
        .status(200)
        .send({ message: "Signed in succesfully", customer: cus, token });
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  }

  async verifyCustomer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedCustomer: any = verify(token, process.env.JWT_KEY!);

      const customer = await prisma.customer.findUnique({
        where: { id: verifiedCustomer.id },
      });

      if (customer?.isVerified == false) {
        await prisma.customer.update({
          data: { isVerified: true },
          where: { id: customer?.id },
        });
        const inputrefCode = customer?.referralCodeBy;
        console.log(inputrefCode);

        if (inputrefCode) {
          const refCustomer = await findRefCode(inputrefCode);

          if (refCustomer) {
            // count the expiry date
            const now = new Date();
            const expiredAt = new Date();
            expiredAt.setMonth(now.getMonth() + 3);

            // api posting referred user's point
            await prisma.customerPoint.create({
              data: { customerId: refCustomer.id, expiredAt: expiredAt },
            });

            // api posting verified user's coupon
            await prisma.customerCoupon.create({
              data: {
                customerId: verifiedCustomer.id,
                expiredAt: expiredAt,
                isRedeem: false,
              },
            });
          }
        }
      }

      if (customer?.isVerified == true) {
        throw { message: "the account is already Verify Successfully" };
      }

      res.status(200).send({ message: "The Process is verify Succesfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  ////////////////////////////////////////////// Organizer //////////////////////////////////////////////////////

  async registerOrganizer(req: Request, res: Response) {
    try {
      const { password, confirmPassword, fullname, username, email } = req.body;
      if (password != confirmPassword) throw { message: "Password not match!" };

      const organizer = await findOrganizer(username, email);
      if (organizer) throw { message: "username or email has been used !" };

      const salt = await genSalt(10);
      const hashPasword = await hash(password, salt);

      const newOrganizer = await prisma.organizer.create({
        data: { fullname, username, email, password: hashPasword },
      });

      const payload = { id: newOrganizer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });

      const link = `${process.env.BASE_URL_FE!}/organizer/verify/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyOrganizer.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ fullname, link });

      await transporter.sendMail({
        from: "mirzaaliyusuf45@gmail.com",
        to: email,
        subject: "Welcome to MatchTix",
        html,
      });

      res.status(201).send({
        message: "Registered successfully. Check your email to verify account.",
      });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async signInOrganizer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const organizer = await findOrganizer(data, data);

      if (!organizer) throw { massage: "User not found !" };
      if (!organizer.isVerified) throw { massage: "User not Verif !" };

      const isValidPass = await compare(password, organizer.password);
      if (!isValidPass) {
        throw { massage: "Incorrect Password" };
      }

      const payload = { id: organizer.id, role: "organizer" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const Orga = { ...organizer, role: "organizer" };
      res
        .status(200)
        .send({ message: "Signed in succesfully", organizer: Orga, token });
    } catch (err) {
      console.error(err);
      res.status(400).send("Sign in Failed");
    }
  }

  async verifyOrganizer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedOrganizer: any = verify(token, process.env.JWT_KEY!);

      const organizer = await prisma.organizer.findUnique({
        where: { id: verifiedOrganizer.id },
      });

      if (organizer?.isVerified == false) {
        await prisma.organizer.update({
          data: { isVerified: true },
          where: { id: organizer.id },
        });
      }
      if (organizer?.isVerified == true) {
        throw { message: "Your account have verified" };
      }

      res.status(200).send({ message: "Verified Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async getSession(req: Request, res: Response) {
    try {
      const role = req.user?.role;

      let user: any = null;

      if (role == "customer") {
        user = await prisma.customer.findUnique({
          where: { id: req.user?.id },
        });
      } else if (role == "organizer") {
        user = await prisma.organizer.findUnique({
          where: { id: req.user?.id },
        });
      }

      user.role = role;

      res.status(200).send({ user });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
