import express, { type Application } from "express";
import { connection } from "./postgres-connection/postgres.js";
import router from "./view/routes.js";

const PORT: number = 8080;

const app: Application = express();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});

connection();
