import express from "express"
import { getIngredientsById } from "../controllers/ingredientController";

const route = express.Router();

route.get("/:id", getIngredientsById)

export default route;