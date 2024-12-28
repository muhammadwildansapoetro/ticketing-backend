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
exports.OrganizerController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class OrganizerController {
    getOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { search, page = 1, limit = 5 } = req.query;
                const filter = {};
                if (search) {
                    filter.OR = [
                        { name: { contains: search, mode: "insensitive" } },
                        { email: { contains: search, mode: "insensitive" } },
                    ];
                }
                const countOrganizer = yield prisma_1.default.organizer.aggregate({ _count: { _all: true } });
                const total_page = Math.ceil(countOrganizer._count._all / +limit);
                const organizer = yield prisma_1.default.organizer.findMany({
                    where: filter,
                    orderBy: { id: "asc" },
                    take: +limit,
                    skip: +limit * (+page - 1),
                });
                res.status(200).send({ total_page, page, organizer });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    getOrganizerId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const organizer = yield prisma_1.default.organizer.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ organizer });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    createOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma_1.default.organizer.create({ data: req.body });
                res.status(201).send({ message: "User created ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    editOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.organizer.update({ data: req.body, where: { id: +id } });
                res.status(200).send({ message: "User updated ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
    deleteOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield prisma_1.default.organizer.delete({ where: { id: +id } });
                res.status(200).send({ message: "User deleted ✅" });
            }
            catch (err) {
                console.log(err);
                res.status(400).send(err);
            }
        });
    }
}
exports.OrganizerController = OrganizerController;
