import { Request, Response } from "express";
import { User } from "../model/user.js";
import { Mobile } from "../model/mobile.js";

/* Create mobile number */
export const saveMobileNumber = async (req: Request, res: Response) => {
  try {
    const { user_id, mobile_number } = req.body;

    if (!user_id || !mobile_number) {
      return res.status(400).json({ message: "user_id and mobile_number required" });
    }

    const mobile = await Mobile.create({
      user_id,
      mobile_number
    });

    res.json({
      message: "Mobile number saved",
      data: mobile
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/* Get all users with mobile numbers */
export const getUsersWithMobiles = async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Mobile,
          attributes: ["id", "mobile_number"]
        }
      ]
    });

    res.json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};
