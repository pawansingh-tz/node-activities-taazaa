// import { DataTypes } from "sequelize";
// import { sequelize } from "../postgres-connection/postgres.js";
// import { User } from "./user.js";

// export const Mobile = sequelize.define(
//   "Mobile",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },

//     phoneNumber: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     userId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: "mobiles",
//     timestamps: false,
//   }
// );

// /* Associations */
// User.hasMany(Mobile, { foreignKey: "userId", as: "phones" });
// Mobile.belongsTo(User, { foreignKey: "userId" });



import { DataTypes } from "sequelize";
import { sequelize } from "../postgres-connection/postgres.js";
import { User } from "./user.js";

export const Mobile = sequelize.define(
  "mobile_numbers",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    mobile_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

/* Associations */
User.hasMany(Mobile, { foreignKey: "user_id" });
Mobile.belongsTo(User, { foreignKey: "user_id" });
