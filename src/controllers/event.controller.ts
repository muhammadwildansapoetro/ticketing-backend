// import { Request, Response } from "express";
// import prisma from "../prisma";

// export class EventController {
//   async getEvents(req: Request, res: Response) {
//     try {
//       const events = await prisma.event.findMany({
//         select: {
//           id: true,
//           title: true,
//           category: true,
//           description: true,
//           location: true,
//           venue: true,
//           date: true,
//           time: true,
//         },
//       });
//       res.status(200).send({ events });
//     } catch (error) {
//       console.log(error);
//       res.status(400).send(error);
//     }
//   }
// }
