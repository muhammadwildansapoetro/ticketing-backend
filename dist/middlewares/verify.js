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
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerCheck = exports.organizerCheck = exports.verifyToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.header("Authorization")) === null || _a === void 0 ? void 0 : _a.replace("Bearer ", "");
        if (!token)
            throw { message: "Unauthorize" };
        const verifiedUser = (0, jsonwebtoken_1.verify)(token, process.env.JWT_KEY);
        req.user = verifiedUser;
        next();
    }
    catch (error) {
        console.error("Token verification error:", error);
        res.status(401).send({ message: "Unauthorized: Invalid token" });
    }
});
exports.verifyToken = verifyToken;
const organizerCheck = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) === "organizer") {
        next();
    }
    else {
        res.status(400).send({ message: "Unauthorize, organizer only" });
    }
};
exports.organizerCheck = organizerCheck;
const customerCheck = (req, res, next) => {
    var _a;
    if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) === "customer") {
        next();
    }
    else {
        res.status(400).send({ message: "Unauthorize, customer only" });
    }
};
exports.customerCheck = customerCheck;
