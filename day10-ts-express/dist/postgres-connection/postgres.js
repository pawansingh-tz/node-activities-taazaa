import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
const sequelize = new Sequelize('user-crud', 'postgres', 'Kasia@123', {
    host: 'localhost',
    dialect: 'postgres'
});
let UserModel = null;
const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        UserModel = createUserModel(sequelize);
        await sequelize.sync(); // create the table in db 
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
export { connection, UserModel };
//# sourceMappingURL=postgres.js.map