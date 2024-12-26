import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { CustomerandOrganizerPayload } from "../custom";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    // const token = req.cookies?.token;
    if (!token) throw {message: "Unauthorize!"};

    const verifiedCustomer = verify(token, process.env.JWT_KEY!);
    // const verifiedOrganizer = verify(token, process.env.JWT_KEY!);

    req.mix = verifiedCustomer as CustomerandOrganizerPayload;
    // req.organizer = verifiedOrganizer  as OrganizerPayload;

    next();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

// export const checkAdmin = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//     if (req.customer?.role == "Admin"){
//         next();
//     } else {
//         res.status(403).send("Unauthorize, Admin Only!");
//     }
// };
