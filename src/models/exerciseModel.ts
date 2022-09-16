import mongoose from "mongoose";
import { ExerciseType } from "../Typescript/Types";

const exerciseSchema = new mongoose.Schema<ExerciseType>({
    bodyPart:{type: String, required: [true, 'You must specify a body part']},
    equipment:{type: String, default: 'none'},
    gifUrl:{type: String, default: 'none'},
    name:{type: String, required: [true, 'You must provide a name for the exercise']},
    target:{type: String, required: [true, 'You must specify the target muscle']},
    difficulty: {type: String, required: [true, 'You must provide a difficulty']},
})

const exercise = mongoose.model<ExerciseType>("exercises", exerciseSchema)

export default exercise;