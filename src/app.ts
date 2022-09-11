import express, {Application, Response, Request, NextFunction} from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const app:Application = express();
const port = process.env.PORT;

app.use("/api/data", require("./routes/getData"));

app.listen(port, () => console.log(`Server is running on port: ${port}`))