import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { CustomerRouter } from "./routers/customer.router";
import { AuthRouter } from "./routers/auth.router";
import { OrganizerRouter } from "./routers/organizer.router";
import { EventRouter } from "./routers/event.router";
import { TicketRouter } from "./routers/ticket.router";
import { OrderRouter } from "./routers/order.router";
import dotenv from "dotenv";
import { ReviewRouter } from "./routers/review.router";
import { DashboardRouter } from "./routers/dashboard.router";
// import { StatisticRouter } from "./routers/statistic.router";
dotenv.config();

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.BASE_URL_FE!,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to MatchTix API");
});

const authRouter = new AuthRouter();
const organizerRouter = new OrganizerRouter();
const customerRouter = new CustomerRouter();
const eventRouter = new EventRouter();
const ticketRouter = new TicketRouter();
const orderRouter = new OrderRouter();
const reviewRouter = new ReviewRouter();
const dashboardRouter = new DashboardRouter();
// const statisticRouter = new StatisticRouter();

app.use("/api/auth", authRouter.getRouter());
app.use("/api/customers", customerRouter.getRouter());
app.use("/api/organizers", organizerRouter.getRouter());
app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());
app.use("/api/reviews", reviewRouter.getRouter());
app.use("/api/dashboard", dashboardRouter.getRouter());
// app.use("/api/statistics", statisticRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`);
});
