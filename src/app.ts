import express, { Application, Response, Request } from "express";
import cors from "cors";

import * as dotenv from "dotenv";
dotenv.config();

// DB connection
import { ConnectDb } from "./config/db";
ConnectDb();

// Routes
import exerciseRoutes from "./routes/exerciseRoutes";
import mealRoutes from "./routes/mealRoutes";
import ingredientRoutes from "./routes/ingredientRoutes";

// Middleware
import errorHandler from "./middlewares/error";

const app: Application = express();
const port = process.env.PORT;

app.set("json spaces", 4);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/exercise", exerciseRoutes);
app.use("/api/meal", mealRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("*", (req: Request, res: Response) =>
  res.status(404).json({ Error: "Not found" })
);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port: ${port}`));
