import { Request, Response } from "express";

import mealModel from "../models/mealModel";
import { setUpMealPlan } from "../Logic/mealLogic";
import { MealTypeInfo } from "../Typescript/Types";

type IngredientsParam = {
  ingredients: string;
};
type BMIParam = {
  bmi: number;
};
type MealTypeParam = {
  MealType: string;
};

// @Desc Get all meals
// @Route api/meal
// @Access private
const getMeal = async (req: Request, res: Response) => {
  try {
    const meal = await mealModel.find<MealTypeInfo>();
    res.status(200).json(meal);
  } catch (error) {
    res.json(error);
  }
};

// @Desc Get meals by BMI
// @Route api/meal/recipes/:bmi
// @Access private
const getMealByBmi = async (req: Request<BMIParam, {}, {}>, res: Response) => {
  try {
    let meal;
    if (req.params.bmi >= 30)
      meal = await mealModel.find<MealTypeInfo>({ cal: { $lt: 500 } });
    res.status(200).json(meal);
  } catch (error) {
    res.json(error);
  }
};

// @Desc Get meals by meal type
// @Route api/meal/findByMealType/:MealType
// @Access private
const getMealByType = async (
  req: Request<MealTypeParam, {}, {}>,
  res: Response
) => {
  try {
    const meal = await mealModel.find({ mealType: req.params.MealType });
    res.status(200).json(meal);
  } catch (error) {
    res.json(error);
  }
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

// @Desc set meal plan
// @Route api/meal/setMealPlan/:bmi
// @Access private
const setMealPlan = async (req: Request<BMIParam, {}, {}>, res: Response) => {
  try {
    let meal;
    if (req.params.bmi >= 30) {
      meal = await mealModel.find<MealTypeInfo>({ cal: { $lt: 500 } });
    } else {
      meal = await mealModel.find<MealTypeInfo>();
    }
    const MealPlan = setUpMealPlan(meal);
    res.json(MealPlan);
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

export {
  getMeal,
  getMealByBmi,
  getMealByType,
  getMealByIngredients,
  addMeal,
  setMealPlan,
};
