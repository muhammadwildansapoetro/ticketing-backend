import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
<<<<<<< HEAD
// import { EventRouter } from "./routers/event.router";
// import { AuthRouter } from "./routers/auth.router";
import { CustomerRouter } from "./routers/customer.router"
import { AuthRouter } from "./routers/auth.router";
import { OrganizerRouter } from "./routers/organizer.router";
=======
import { EventRouter } from "./routers/event.router";
import { TicketRouter } from "./routers/ticket.router";
import { OrderRouter } from "./routers/order.router";
import dotenv from "dotenv";
dotenv.config();
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL_FE!,
    methods: ["GET", "POST", "PUT", "DELETE"],
    // credentials: true,
  })
);
app.use(cookieParser());

console.log(process.env.BASE_URL_FE);

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to MatchTix API");
});

<<<<<<< HEAD
// const eventRouter = new EventRouter();
const authRouter = new AuthRouter();
const customerRouter = new CustomerRouter();
const organizerRouter = new OrganizerRouter()

// app.use("/api/events", eventRouter.getRouter());
app.use("/api/auth", authRouter.getRouter());
app.use("/api/customers", customerRouter.getRouter());
app.use("/api/organizer", organizerRouter.getRouter())
=======
const eventRouter = new EventRouter();
const ticketRouter = new TicketRouter();
const orderRouter = new OrderRouter();

app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
>>>>>>> 59a595c96f5f450c34ea53b287e24bb8428e8a06

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`);
});
