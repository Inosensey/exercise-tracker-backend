import express, {Application, Response, Request, NextFunction} from "express";
import * as dotenv from 'dotenv'
import router from "./routes/getExerciseData"
import { errorHandler } from "./middlewares/error";
dotenv.config()

const app:Application = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(errorHandler)

app.use("/get/exercise", router);

app.listen(port, () => console.log(`Server is running on port: ${port}`))