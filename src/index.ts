import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import appRouter from "./routes/index.route";

dotenv.config();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("", appRouter)



app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
});
