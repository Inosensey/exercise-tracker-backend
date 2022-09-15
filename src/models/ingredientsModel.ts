import mongoose from "mongoose";

interface IIngredients {
    amount: number,
    image: string,
    name: string,
}

const ingredientsSchema = new mongoose.Schema<IIngredients>({
    amount: {type: Number, required: [true, "Provide an amount"]},
    image: {type: String, required:[true, "Provide an image"]},
    name: {type: String, required:[true, "Provide a name"]}
})

const ingredient = mongoose.model<IIngredients>("ingredients", ingredientsSchema);

export default ingredient;