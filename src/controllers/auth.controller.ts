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
      if (password != confirmPassword) throw { message: "Password not match!" };

      const customer = await findCustomer(username, email);
      if (customer) throw { message: "Username or email has been used!" };

      const salt = await genSalt(10);
      const hashPassword = await hash(password, salt);

      if (referralCodeBy == "") referralCodeBy = null;
      // const generatedReferralCode = Math.random().toString(36).slice(2, 8).toUpperCase();
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

      // Send verification email
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
      const html = compiledTemplate({ username, link });

      await transporter.sendMail({
        from: "mirzaaliyusuf45@gmail.com",
        to: email,
        subject: "Welcome to MatchTix",
        html,
      });
      res.status(201).send({ message: "Register Successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }

  async SignInCustomer(req: Request, res: Response) {
    try {
      const { data, password } = req.body;
      const customer = await findCustomer(data, data);

      if (!customer) throw { massage: "User not found !" };
      if (!customer.isVerified) throw { massage: "User not Verif !" };

      const isValidPass = await compare(password, customer.password);
      if (!isValidPass) {
        throw { massage: "Incorrect Password" };
      }

      const payload = { id: customer.id, role: "customer" };
      const token = sign(payload, process.env.JWT_KEY!, { expiresIn: "1d" });
      const Customer = { ...customer, role: "customer" };
      res.status(200).send({
        message: "Sign-In Customer Succesfully",
        customer: Customer,
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(400).send("Sign-In Failed");
    }
  }

  async verifyCustomer(req: Request, res: Response) {
    try {
      const { token } = req.params;

      const verifiedCustomer: any = verify(token, process.env.JWT_KEY!);

      const customer = await prisma.customer.findUnique({
        where: { id: verifiedCustomer.id },
      });

      if (!customer) {
        throw { message: "Customer not found" };
      }

      if (customer.isVerified) {
        throw { message: "Your account is already verified" };
      }

      await prisma.customer.update({
        data: { isVerified: true },
        where: { id: customer.id },
      });

      const InputRefCode = customer.referralCodeBy;

      if (InputRefCode) {
        const RefCustomer = await prisma.customer.findFirst({
          where: { referralCode: InputRefCode },
        });

        if (RefCustomer) {
          const DateNow = new Date();
          const expiredAt = new Date();
          expiredAt.setMonth(DateNow.getMonth() + 3);

          // Tambahkan validasi untuk mencegah duplikasi poin
          await prisma.$transaction(async (prisma) => {
            const existingPoint = await prisma.customerPoint.findFirst({
              where: {
                customerId: RefCustomer.id,
                expiredAt,
              },
            });

            if (!existingPoint) {
              await prisma.customerPoint.create({
                data: {
                  customerId: RefCustomer.id,
                  expiredAt,
                },
              });
            }
          });

          // Buat kupon untuk customer baru
          await prisma.customerCoupon.create({
            data: {
              customerId: customer.id,
              expiredAt,
              isRedeem: false,
            },
          });
        }
      }

      res.status(200).send({ message: "Verify Successfully" });
    } catch (err) {
      console.error(err);
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
        subject: "Welcome to MatchTix",
        html,
      });

      res.status(201).send({ message: "Register Successfully" });
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
      const Organizer = { ...organizer, role: "organizer" };
      res.status(200).send({
        message: "Sign-In Organizer Succesfully",
        organizer: Organizer,
        token,
      });
    } catch (err) {
      console.error(err);
      res.status(400).send("Sign-In Failed");
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

      let user: any = {};

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
