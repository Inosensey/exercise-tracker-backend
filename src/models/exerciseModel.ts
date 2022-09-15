import mongoose from "mongoose";

interface IExercise {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    name: string,
    target: string,
    difficulty: string,
}

const exerciseSchema = new mongoose.Schema<IExercise>({
    bodyPart:{type: String, required: [true, 'You must specify a body part']},
    equipment:{type: String, default: 'none'},
    gifUrl:{type: String, default: 'none'},
    name:{type: String, required: [true, 'You must provide a name for the exercise']},
    target:{type: String, required: [true, 'You must specify the target muscle']},
    difficulty: {type: String, required: [true, 'You must provide a difficulty']},
})

const exercise = mongoose.model<IExercise>("exercises", exerciseSchema)

export default exercise;