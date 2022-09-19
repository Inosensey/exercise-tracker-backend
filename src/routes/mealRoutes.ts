import express from "express";
import {
  addMeal,
  getMeal,
  getMealByBmi,
  getMealByIngredients,
} from "../controllers/mealController";

const router = express.Router();

router.get("/", getMeal);
router.get("/recipes/:bmi", getMealByBmi);
router.get("/recipes/findByIngredients/:ingredients", getMealByIngredients);

router.post("/add", addMeal);

export default router;
