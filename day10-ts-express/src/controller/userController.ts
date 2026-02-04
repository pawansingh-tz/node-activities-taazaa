import type { Request, Response } from "express";
import { UserModel } from "../postgres-connection/postgres.ts";

// Get all users
export const getAllUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const users = await UserModel.findAll({
      order: [["id", "ASC"]],
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Add user
export const addUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    await UserModel.create(req.body);
    return res.status(201).json({ message: "User added" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Update user
export const updateUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId: number = Number(req.params.userId);

    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: `User not found with id: ${userId}`,
      });
    }

    await user.update(req.body);

    return res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Get user by id
export const getUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId: number = Number(req.params.userId);

    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: `User not found with id: ${userId}`,
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Delete user
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId: number = Number(req.params.userId);

    const user = await UserModel.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: `User not found with id: ${userId}`,
      });
    }

    await user.destroy();

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
