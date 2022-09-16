import mongoose from "mongoose";
import { MealType } from "../Typescript/Types";

const mealSchema = new mongoose.Schema<MealType>({
    title: {type: String, required: [true, "You must provide a title"]},
    image: {type: String, required:[true, "You must provide an image src"]},
    imageType: {type: String}
})

const meal = mongoose.model<MealType>("meal", mealSchema)

export default meal;