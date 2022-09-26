import { Request, Response } from "express";
import ingredientModel from "../models/ingredientsModel";
import { IIngredients } from "../Typescript/Interface";

type IngredientsParam = {
  id: number;
};

// @Desc get ingredients by id
// @Route api/ingredients/:id
// @Access private
const getIngredientsById = async (
  req: Request<IngredientsParam, {}, {}>,
  res: Response
) => {
  try {
    const ingredients = await ingredientModel.find({ id: req.params.id });
    res.status(200).json(ingredients);
  } catch (error) {
    res.json(error);
  }
};

// @Desc Add ingredients
// @Route api/ingredients/add
// @Access private
const addIngredients = async (
  req: Request<{}, {}, IIngredients>,
  res: Response
) => {
  try {
    await ingredientModel.create({
      id: req.body.id,
      ingredients: req.body.ingredients,
    });
    res
      .status(200)
      .json({ Message: `Recipes has been added to meal ${req.body.id}` });
  } catch (error) {
    res.json(error);
  }
};

export { getIngredientsById, addIngredients };
