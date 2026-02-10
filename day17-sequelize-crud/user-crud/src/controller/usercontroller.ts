import { Request, Response } from "express";
import { User } from "../model/user.js";
import { Mobile } from "../model/mobile.js";
import { sequelize } from "../postgres-connection/postgres.js";
import { QueryTypes } from "sequelize";
import { userRepository } from "../repository/userRepository.js";


export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    const user = await User.create({
      name,
      email,
      age,
    });

    res.status(201).json(user);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};




export const getUsersWithMobilesJoin = async (req: Request, res: Response) => {
  try {
    const query = `
      SELECT 
        u.id AS user_id,
        u.name,
        m.id AS mobile_id,
        m.mobile_number
      FROM users u
      LEFT JOIN mobile_numbers m
        ON u.id = m.user_id
      ORDER BY u.id
    `;

    const userAndMobileRows = await sequelize.query(query, {
      type: QueryTypes.SELECT
    });

    
    const usersMap: any = {};

    userAndMobileRows.forEach((row: any) => {
      if (!usersMap[row.user_id]) {
        usersMap[row.user_id] = {
          id: row.user_id,
          name: row.name,
          mobiles: []
        };
      }

      if (row.mobile_id) {
        usersMap[row.user_id].mobiles.push({
          id: row.mobile_id,
          mobile_number: row.mobile_number
        });
      }
    });

    res.json(Object.values(usersMap));
  } catch (error) {
    res.status(500).json({ error });
  }
};




export const createUserWithMobiles = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();

  try {
    const { name, email, age, mobile_numbers } = req.body;

    // Create User
    const user = await User.create(
      { name, email, age },
      { transaction }
    );

    // Create the  mobile records
    const mobiles = mobile_numbers.map((number: string) => ({
      mobile_number: number,
      user_id: user.dataValues.id
    }));

    //  insert mobiles
    await Mobile.bulkCreate(mobiles, { transaction });

    // transaction complete
    await transaction.commit();

    res.status(201).json({
      message: "User and mobile numbers saved successfully",
      user
    });

  } catch (error) {
    await transaction.rollback();

    res.status(500).json({
      message: "Something went wrong",
      error
    });
  }
};

export const getUsersWithMob = async (req: Request, res: Response) => {
  try {
    const users = await userRepository.getUsersWithMob();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch users",
      error,
    });
  }
};