import mongoose from "mongoose";
import { MealTypeInfo } from "../Typescript/Types";

const mealSchema = new mongoose.Schema<MealTypeInfo>({
  id: { type: Number, required: [true, "You must provide an ID"] },
  title: { type: String, required: [true, "You must provide a title"] },
  image: { type: String, required: [true, "You must provide an image src"] },
  imageType: { type: String },
  cal: {
    type: Number,
    required: [true, "You must provide a number of calories"],
  },
  mealType: {
    type: String,
    required: [true, "You must provide a meal type"],
  },
});

const meal = mongoose.model<MealTypeInfo>("meal", mealSchema);

export default meal;
