import { Request, Response } from "express";

import mealModel from "../models/mealModel";
import { setUpMealPlan } from "../Logic/mealLogic";
import { MealTypeInfo } from "../Typescript/Types";

type IngredientsParam = {
  ingredients: string;
};

// @Desc Get all meals
// @Route api/meal
// @Access private
const getMeal = async (req: Request, res: Response) => {
  try {
    const meal = await mealModel.find<MealTypeInfo>();
    const mealPlan = setUpMealPlan(meal);
    res.status(200).json(mealPlan);
  } catch (error) {
    res.json(error);
  }
};

// @Desc Get meals by BMI
// @Route api/meal/recipes/:bmi
// @Access private
const getMealByBmi = (req: Request, res: Response) => {
  res.json({ Message: `Meal received base on BMI: ${req.params.bmi}` });
};

// @Desc Get meals by ingredients
// @Route api/meal/findByIngredients/:ingredients
// @Access private
const getMealByIngredients = async (
  req: Request<IngredientsParam, {}, {}>,
  res: Response
) => {
  try {
    const meal = await mealModel.find({ ingredients: req.params.ingredients });
    res.status(200).json(meal);
  } catch (error) {
    res.json(error);
  }
};

// @Desc Add meal
// @Route api/meal/add
// Access private
const addMeal = async (req: Request<{}, {}, MealTypeInfo>, res: Response) => {
  try {
    const meal = await mealModel.create({
      id: req.body.id,
      title: req.body.title,
      image: req.body.image,
      imageType: req.body.imageType,
      cal: req.body.cal,
      mealType: req.body.mealType,
    });
    res.status(200).json({ Message: `A new meal has been add ${meal}` });
  } catch (error) {
    res.json(error);
  }
};

export { getMeal, getMealByBmi, getMealByIngredients, addMeal };
