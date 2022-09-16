import mongoose from "mongoose";
import { IngredientsType } from "../Typescript/Types";

const ingredientsSchema = new mongoose.Schema<IngredientsType>({
    amount: {type: Number, required: [true, "Provide an amount"]},
    image: {type: String, required:[true, "Provide an image"]},
    name: {type: String, required:[true, "Provide a name"]}
})

const ingredient = mongoose.model<IngredientsType>("ingredients", ingredientsSchema);

export default ingredient;