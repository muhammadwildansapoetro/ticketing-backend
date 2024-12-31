"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = require("bcrypt");
const customer_service_1 = require("../services/customer.service");
const jsonwebtoken_1 = require("jsonwebtoken");
const mailer_1 = require("../services/mailer");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const organizer_service_1 = require("../services/organizer.service");
const auth_service_1 = require("../services/auth.service");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AuthController {
    registerCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let { fullname, password, confirmPassword, username, email, referralCodeBy, } = req.body;
                if (password != confirmPassword)
                    throw { message: "Password not match" };
                const customer = yield (0, customer_service_1.findCustomer)(username, email);
                if (customer)
                    throw { message: "Username or email has been used!" };
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPassword = yield (0, bcrypt_1.hash)(password, salt);
                // Generate referral code for the new customer
                // const generatedReferralCode = Math.random().toString(36).slice(2, 8).toUpperCase();
                let newRefCode = (0, auth_service_1.generator)();
                const refCode = yield (0, customer_service_1.findRefCode)(newRefCode);
                if (refCode)
                    newRefCode = (0, auth_service_1.generator)();
                if (referralCodeBy) {
                    const isRefCode = yield (0, customer_service_1.findRefCode)(referralCodeBy);
                    if (!isRefCode)
                        throw { message: "ReferralCode is not found" };
                }
                if (referralCodeBy == "")
                    referralCodeBy = null;
                // Create new customer
                const newCustomer = yield prisma_1.default.customer.create({
                    data: {
                        fullname,
                        username,
                        email,
                        password: hashPassword,
                        referralCode: newRefCode,
                        referralCodeBy,
                    },
                });
                // Create a 10% discount coupon for the new customer
                const couponExpiryDate = new Date();
                couponExpiryDate.setMonth(couponExpiryDate.getMonth() + 3);
                yield prisma_1.default.customerCoupon.create({
                    data: {
                        customerId: newCustomer.id,
                        percentage: 10,
                        isRedeem: false,
                        expiredAt: couponExpiryDate,
                    },
                });
                // Send verification email
                const payload = { id: newCustomer.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const link = `${process.env.BASE_URL_FE}/customer/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates", "verifyCustomer.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ username, link });
                yield mailer_1.transporter.sendMail({
                    from: "mirzaaliyusuf45@gmail.com",
                    to: email,
                    subject: "Welcome to MatchTix",
                    html,
                });
                res.status(201).send({ message: "Register Successfully" });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
    signInCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const customer = yield (0, customer_service_1.findCustomer)(data, data);
                if (!customer)
                    throw { massage: "User not found !" };
                if (!customer.isVerified)
                    throw { massage: "User not Verif !" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, customer.password);
                if (!isValidPass) {
                    throw { massage: "Incorrect Password" };
                }
                const payload = { id: customer.id, role: "customer" };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const cus = Object.assign(Object.assign({}, customer), { role: "customer" });
                res
                    .status(200)
                    .send({ massage: "Signed in Succesfully", customer: cus, token });
            }
            catch (err) {
                console.error(err);
                res.status(400).send({ message: "Sign in Failed" });
            }
        });
    }
    verifyCustomer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedCustomer = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                const customer = yield prisma_1.default.customer.findUnique({
                    where: { id: verifiedCustomer.id },
                });
                if ((customer === null || customer === void 0 ? void 0 : customer.isVerified) == false) {
                    yield prisma_1.default.customer.update({
                        data: { isVerified: true },
                        where: { id: customer.id },
                    });
                }
                if ((customer === null || customer === void 0 ? void 0 : customer.isVerified) == true) {
                    throw { message: "Your account have verified" };
                }
                res.status(200).send({ message: "Verify Successfully" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    ////////////////////////////////////////////// Organizer //////////////////////////////////////////////////////
    registerOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password, confirmPassword, name, email } = req.body;
                if (password != confirmPassword)
                    throw { message: "Password not match!" };
                const organizer = yield (0, organizer_service_1.findOrganizer)(name, email);
                if (organizer)
                    throw { message: "username or email has been used !" };
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashPasword = yield (0, bcrypt_1.hash)(password, salt);
                const newOrganizer = yield prisma_1.default.organizer.create({
                    data: { name, email, password: hashPasword },
                });
                const payload = { id: newOrganizer.id };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const link = `${process.env.BASE_URL_FE}/organizer/verify/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates", "verifyOrganizer.hbs");
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ name, link });
                yield mailer_1.transporter.sendMail({
                    from: "mirzaaliyusuf45@gmail.com",
                    to: email,
                    subject: "Welcome to MatchTix",
                    html,
                });
                res.status(201).send({ message: "Register Successfully" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    signInOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, password } = req.body;
                const organizer = yield (0, organizer_service_1.findOrganizer)(data, data);
                if (!organizer)
                    throw { massage: "User not found !" };
                if (!organizer.isVerified)
                    throw { massage: "User not Verif !" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, organizer.password);
                if (!isValidPass) {
                    throw { massage: "Incorrect Password" };
                }
                const payload = { id: organizer.id, role: "organizer" };
                const token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_KEY, { expiresIn: "1d" });
                const Orga = Object.assign(Object.assign({}, organizer), { role: "organizer" });
                res
                    .status(200)
                    .send({ massage: "Sign in User Succesfully", organizer: Orga, token });
            }
            catch (err) {
                console.error(err);
                res.status(400).send("Sign in Failed");
            }
        });
    }
    verifyOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { token } = req.params;
                const verifiedOrganizer = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
                // console.log(verifiedOrganizer)
                const organizer = yield prisma_1.default.organizer.findUnique({
                    where: { id: verifiedOrganizer.id },
                });
                if ((organizer === null || organizer === void 0 ? void 0 : organizer.isVerified) == false) {
                    yield prisma_1.default.organizer.update({
                        data: { isVerified: true },
                        where: { id: organizer.id },
                    });
                }
                if ((organizer === null || organizer === void 0 ? void 0 : organizer.isVerified) == true) {
                    throw { message: "Your account have verified" };
                }
                res.status(200).send({ message: "Verify Successfully" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            try {
                const role = (_a = req.user) === null || _a === void 0 ? void 0 : _a.role;
                let user = {};
                if (role == "customer") {
                    user = yield prisma_1.default.customer.findUnique({
                        where: { id: (_b = req.user) === null || _b === void 0 ? void 0 : _b.id },
                    });
                }
                else if (role == "organizer") {
                    user = yield prisma_1.default.organizer.findUnique({
                        where: { id: (_c = req.user) === null || _c === void 0 ? void 0 : _c.id },
                    });
                }
                user.role = role;
                res.status(200).send({ user });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.AuthController = AuthController;
