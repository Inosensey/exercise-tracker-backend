import { Request, Response } from "express";
import ingredientModel from "../models/ingredientsModel"

type IngredientsParam = {
    id: number
}

// @Desc get ingredients by id
// @Route api/ingredients/:id
// @Access private
const getIngredientsById = async (req:Request<IngredientsParam, {}, {}>, res:Response) => {
    try {
        const ingredients = await ingredientModel.find({id: req.params.id});
        res.status(200).json(ingredients)
    } catch (error) {
        res.json(error)
    }
}

export {
    getIngredientsById
}