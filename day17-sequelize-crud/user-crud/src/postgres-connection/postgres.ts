import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "user-ts",
  "postgres",
  "Kasia@123",
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
  }
);
