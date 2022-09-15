import { Request, Response } from "express";

//Model
import ExerciseModel from "../models/exerciseModel";

//Types/Interface
import { BodyPartType, ExerciseType } from "../Typescript/Types";

// @desc Get all exercise
// @route GET api/exercise
// @access public
const getExercise = async (req:Request, res:Response) => {
    try {
        const exercise = await ExerciseModel.find();
        res.status(200).json(exercise);
    } catch (error) {
        res.json(error)
    }
}

// @desc Get all exercise by body part
// @route GET api/exercise/:bodypart
// @access public
const getBodyPartExercise = async (req:Request<BodyPartType,{},{}>, res:Response) => {
    try {
        const exercise = await ExerciseModel.find({bodyPart: req.params.bodyPart})
        res.status(200).json(exercise);
    } catch (error) {
        res.json(error)
    }
}

// @desc Add exercise
// @route post api/exercise/add
// @access public
const addExercise = async (req:Request<{},{},ExerciseType>, res:Response) => {    
    try {
        const newExercise = await ExerciseModel.create({
            bodyPart: req.body.bodyPart,
            equipment: req.body.equipment,
            gifUrl: req.body.gifUrl,
            name: req.body.name,
            target: req.body.target,
            difficulty: req.body.difficulty,
        });
        res.status(200).json({Message: `A new exercise has been added: ${newExercise}`});
    } catch (error) {
        console.log(`Unable to post review: ${error}`)
    }

}

export {
    getExercise,
    getBodyPartExercise,
    addExercise
}
