import { DataTypes, Sequelize, Model , type Optional } from "sequelize";

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  age: number;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public age!: number;
}

export const createUserModel = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
    }
  );

  return User;
};
