import express from "express";
import {
  addMeal,
  getMeal,
  getMealByBmi,
  getMealByIngredients,
  getMealByType,
  setMealPlan,
} from "../controllers/mealController";

const router = express.Router();

router.get("/", getMeal);
router.get("/recipes/:bmi", getMealByBmi);
router.get("/recipes/findByIngredients/:ingredients", getMealByIngredients);
router.get("/recipes/findByMealType/:MealType", getMealByType);
router.get("/recipes/setMealPlan/:bmi", setMealPlan);

router.post("/add", addMeal);

export default router;
