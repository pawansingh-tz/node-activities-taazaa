import express, {} from "express";
import { connection } from "./postgres-connection/postgres.js";
import router from "./view/routes.js";
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(router);
app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});
connection();
//# sourceMappingURL=index.js.map