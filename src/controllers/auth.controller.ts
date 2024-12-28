import { Request, Response } from "express";
import prisma from "../prisma";
import { genSalt, hash, compare } from "bcrypt";
import { findCustomer } from "../services/customer.service";
import { sign, verify } from "jsonwebtoken";
import { transporter } from "../services/mailer";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { findOrganizer } from "../services/organizer.service";

export class AuthController {
  async registerCustomer(req: Request, res: Response) {
    try {
      const { fullname, password, confirmPassword, username, email, referralCode } = req.body;
      if (password != confirmPassword) throw { message: "Password not match!" };

      const customer = await findCustomer(username, email);
      if (customer) throw { message: "Username or email has been used!" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      // Generate referral code for the new customer
      const generatedReferralCode = username + Math.random().toString(36).substring(2, 8);

      // Create new customer
      const newCustomer = await prisma.customer.create({
        data: {
          fullname,
          username,
          email,
          password: hashPassword,
          referralCode: generatedReferralCode,
        },
      });

      // Handle referral logic
      if (referralCode) {
        // Find the customer who owns the referral code
        const referrer = await prisma.customer.findUnique({ where: { referralCode } });

        if (!referrer) throw { message: "Invalid referral code!" };

        // Create 10,000 points for the referrer
        const pointExpiryDate = new Date();
        pointExpiryDate.setMonth(pointExpiryDate.getMonth() + 3);

        await prisma.customerPoint.create({
          data: {
            customerId: referrer.id,
            point: 10000,
            expiredAt: pointExpiryDate,
          },
        });

        // Create a 10% discount coupon for the new customer
        const couponExpiryDate = new Date();
        couponExpiryDate.setMonth(couponExpiryDate.getMonth() + 3);

        await prisma.customerCoupon.create({
          data: {
            customerId: newCustomer.id,
            percentage: 10,
            isRedeem: false,
            expiredAt: couponExpiryDate,
          },
        });
      }

      // Send verification email
      const payload = { id: newCustomer.id };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "10m" });

      const link = `${process.env.BASE_URL_FE!}/customer/verify/${token}`;

      const templatePath = path.join(
        __dirname,
        "../templates",
        "verifyCustomer.hbs"
      );
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ username, link });

      await transporter.sendMail({
        from: "mirzaaliyusuf45@gmail.com",
        to: email,
        subject: "Welcome to Blogger 🙌",
        html,
      });

      res.status(201).send({ message: "Register Successfully ✅" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async loginCustomer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const customer = await findCustomer(data, data);

      if (!customer) throw { massage: "User not found !" };
      if (!customer.isVerified) throw { massage: "User not Verif !" };

      const isValidPass = await compare(password, customer.password);
      if (!isValidPass) {
        throw { massage: "Incorrect Password" };
      }

      const payload = { id: customer.id, type: "customer" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const cus = { ...customer, role: "customer" };
      res
        .status(200)
        .send({ massage: "Login User Succesfully", customer: cus, token });
    } catch (err) {
      console.error(err);
      res.status(400).send("Login Failed");
    }
  }

  async verifyCustomer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedCustomer: any = verify(token, process.env.JWT_KEY!);
      // console.log(verifiedCustomer)

      const customer = await prisma.customer.findUnique({
        where: { id: verifiedCustomer.id },
      });
      if (customer?.isVerified == false) {
        await prisma.customer.update({
          data: { isVerified: true },
          where: { id: customer.id },
        });
      }
      if (customer?.isVerified == true) {
        throw { message: "Your account have verified" };
      }
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  ////////////////////////////////////////////// Organizer //////////////////////////////////////////////////////
  async registerOrganizer(req: Request, res: Response) {
    try {
      const { password, confirmPassword, name, email } = req.body;
      if (password != confirmPassword) throw { message: "Password not match!" };

      const organizer = await findOrganizer(name, email);
      if (organizer) throw { message: "username or email has been used !" };

      const salt = await genSalt(10);
      const hashPasword = await hash(password, salt);

      const newOrganizer = await prisma.organizer.create({
        data: { name, email, password: hashPasword },
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
      const html = compiledTemplate({ name, link });

      await transporter.sendMail({
        from: "mirzaaliyusuf45@gmail.com",
        to: email,
        subject: "Welcome to Blogger 🙌",
        html,
      });

      res.status(201).send({ message: "Register Successfully ✅" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }

  async loginOrganizer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const organizer = await findOrganizer(data, data);

      if (!organizer) throw { massage: "User not found !" };
      if (!organizer.isVerified) throw { massage: "User not Verif !" };

      const isValidPass = await compare(password, organizer.password);
      if (!isValidPass) {
        throw { massage: "Incorrect Password" };
      }

      const payload = { id: organizer.id, type: "organizer" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const Orga = { ...organizer, role: "organizer" };
      res
        .status(200)
        .send({ massage: "Login User Succesfully", organizer: Orga, token });
    } catch (err) {
      console.error(err);
      res.status(400).send("Login Failed");
    }
  }

  async verifyOrganizer(req: Request, res: Response) {
    try {
      const { token } = req.params;
      const verifiedOrganizer: any = verify(token, process.env.JWT_KEY!);
      // console.log(verifiedOrganizer)

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
      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  async getSession(req: Request, res: Response) {
    try {
      const role = req.user?.role;

      let acc: any = {};

      if (role == "customer") {
        acc = await prisma.customer.findUnique({
          where: { id: req.user?.id },
        });
      } 
      else if (role == "organizer") {
        acc = await prisma.organizer.findUnique({
          where: { id: req.user?.id },
        });
      }
      acc.role = role;

      res.status(200).send({ acc });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  } 
}
