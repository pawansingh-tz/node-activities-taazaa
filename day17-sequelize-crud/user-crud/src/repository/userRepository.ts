import { sequelize } from "../postgres-connection/postgres.js";
import { User } from "../model/user.js";
import { Mobile } from "../model/mobile.js";


export const userRepository = {
  async createUserWithMobiles(
    userData: { name: string; email: string; age: number },
    mobileNumbers: string[]
  ){
    const transaction = await sequelize.transaction();

    try {
      const user = await User.create(userData, { transaction });

      const userId = user.getDataValue("id");

      const mobiles = mobileNumbers.map((num) => ({
        mobile_number: num,
        user_id: userId,
      }));

      await Mobile.bulkCreate(mobiles, { transaction });

      await transaction.commit();

      return { userId };
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

    
    async getUsersWithMob() {
        return User.findAll({
            attributes: ["id", "name", "email", "age"],
            include: [
                {
                    model: Mobile,
                    attributes: ["id", "mobile_number"],
                },
            ],
            order: [["id", "ASC"]],
        });
    }

};