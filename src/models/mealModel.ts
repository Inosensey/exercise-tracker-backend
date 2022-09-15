import mongoose from "mongoose";

interface IMeal {
    title: string, 
    image: string,
    imageType: string
}

const mealSchema = new mongoose.Schema<IMeal>({
    title: {type: String, required: [true, "You must provide a title"]},
    image: {type: String, required:[true, "You must provide an image src"]},
    imageType: {type: String}
})

const meal = mongoose.model<IMeal>("meal", mealSchema)

export default meal;