import mongoose from "mongoose";
import { IIngredients } from "../Typescript/Interface";

const ingredientsSchema = new mongoose.Schema<IIngredients>({
  id: {
    type: Number,
    required: [true, "Provide an ID referencing your recipe"],
  },
  ingredients: [
    {
      amount: { type: Number, required: [true, "Provide an amount"] },
      image: { type: String, required: [true, "Provide an image"] },
      name: { type: String, required: [true, "Provide a name"] },
    },
  ],
});

const ingredient = mongoose.model<IIngredients>(
  "ingredients",
  ingredientsSchema
);

export default ingredient;
