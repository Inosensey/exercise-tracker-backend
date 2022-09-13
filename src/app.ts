import express, {Application, Response, Request, NextFunction} from "express";
import * as dotenv from 'dotenv'
import router from "./routes/exerciseRoutes"
import errorHandler from "./middlewares/error";
import cors from "cors"
import {ConnectDb} from "./config/db";
dotenv.config()

ConnectDb()

const app:Application = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/exercise", router);
app.use("*",(req, res) => res.status(404).json({Error: "Not found"}));

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`))