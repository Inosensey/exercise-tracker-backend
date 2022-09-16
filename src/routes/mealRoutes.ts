import express, { Request, Response } from "express";
import { getMeal, getMealByBmi, getMealByIngredients } from "../controllers/mealController";

const router = express.Router();

router.get("/", getMeal)
router.get("/recipes/:bmi", getMealByBmi)
router.get("/recipes/findByIngredients/:ingredients", getMealByIngredients)

export default router;