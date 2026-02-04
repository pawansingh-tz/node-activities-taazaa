import { DataTypes, Sequelize, Model } from "sequelize";
export class User extends Model {
    id;
    name;
    email;
    age;
}
export const createUserModel = (sequelize) => {
    User.init({
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
    }, {
        sequelize,
        modelName: "User",
        tableName: "Users",
    });
    return User;
};
//# sourceMappingURL=userSchema.js.map