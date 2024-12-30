"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const customer_router_1 = require("./routers/customer.router");
const auth_router_1 = require("./routers/auth.router");
const organizer_router_1 = require("./routers/organizer.router");
const event_router_1 = require("./routers/event.router");
const ticket_router_1 = require("./routers/ticket.router");
const order_router_1 = require("./routers/order.router");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.BASE_URL_FE,
    // methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
console.log(process.env.BASE_URL_FE);
app.get("/api", (req, res) => {
    res.status(200).send("Welcome to MatchTix API");
});
const eventRouter = new event_router_1.EventRouter();
const ticketRouter = new ticket_router_1.TicketRouter();
const orderRouter = new order_router_1.OrderRouter();
const authRouter = new auth_router_1.AuthRouter();
const customerRouter = new customer_router_1.CustomerRouter();
const organizerRouter = new organizer_router_1.OrganizerRouter();
app.use("/api/auth", authRouter.getRouter());
app.use("/api/customers", customerRouter.getRouter());
app.use("/api/organizer", organizerRouter.getRouter());
app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/api`);
});
