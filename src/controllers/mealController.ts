import { Request, Response } from "express";

import mealModel from "../models/mealModel";

type IngredientsParam = {
    ingredients: string
}

// @Desc Get all meals
// @Route api/meal
// @Access private
const getMeal = async (req:Request, res:Response) => {
    try {
        const meal = await mealModel.find();
        res.status(200).json(meal);
    } catch (error) {
        res.json(error)
    }
}

// @Desc Get meals by BMI
// @Route api/meal/recipes/:bmi
// @Access private
const getMealByBmi = (req:Request, res:Response) => {
    res.json({Message: `Meal received base on BMI: ${req.params.bmi}`})
}

// @Desc Get meals by ingredients
// @Route api/meal/findByIngredients/:ingredients
// @Access private
const getMealByIngredients = async (req:Request<IngredientsParam, {}, {}>, res:Response) => {
    try {
        const meal = await mealModel.find({ingredients: req.params.ingredients})
        res.status(200).json(meal)
    } catch (error) {
        res.json(error)
    }
}

export {
    getMeal,
    getMealByBmi,
    getMealByIngredients
}