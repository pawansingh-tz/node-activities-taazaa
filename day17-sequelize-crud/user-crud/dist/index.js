import express from "express";
import routes from "./view/routes.js";
import { sequelize } from "./postgres-connection/postgres.js";
const app = express();
app.use(express.json());
await sequelize.sync();
console.log("Database synced");
app.use("/api", routes);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
