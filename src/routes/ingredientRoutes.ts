import express from "express";
import {
  addIngredients,
  getIngredientsById,
} from "../controllers/ingredientController";

const route = express.Router();

route.get("/:id", getIngredientsById);

route.post("/add", addIngredients);

export default route;
