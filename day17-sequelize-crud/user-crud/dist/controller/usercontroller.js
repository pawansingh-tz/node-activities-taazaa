import { User } from "../model/user.js";
import { sequelize } from "../postgres-connection/postgres.js";
import { QueryTypes } from "sequelize";
export const createUser = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({
            name,
            email,
            age,
        });
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};
export const getUsersWithMobilesJoin = async (_req, res) => {
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
        const rows = await sequelize.query(query, {
            type: QueryTypes.SELECT
        });
        /* Transform flat JOIN result into nested JSON */
        const usersMap = {};
        rows.forEach((row) => {
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
    }
    catch (error) {
        res.status(500).json({ error });
    }
};
