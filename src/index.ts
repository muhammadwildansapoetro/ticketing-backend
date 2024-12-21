import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { EventRouter } from "./routers/event.router";
import { TicketRouter } from "./routers/ticket.router";
import { OrderRouter } from "./routers/order.router";
import dotenv from "dotenv";
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

const eventRouter = new EventRouter();
const ticketRouter = new TicketRouter();
const orderRouter = new OrderRouter();

app.use("/api/events", eventRouter.getRouter());
app.use("/api/tickets", ticketRouter.getRouter());
app.use("/api/orders", orderRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/api`);
});
