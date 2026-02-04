import { Sequelize, Model, type Optional } from "sequelize";
interface UserAttributes {
    id: number;
    name: string;
    email: string;
    age: number;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {
}
export declare class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id: number;
    name: string;
    email: string;
    age: number;
}
export declare const createUserModel: (sequelize: Sequelize) => typeof User;
export {};
//# sourceMappingURL=userSchema.d.ts.map