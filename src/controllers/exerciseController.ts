import { Request, Response } from "express";

//Model
import ExerciseModel from "../models/exerciseModel";

//Types/Interface
import { ExerciseType } from "../Typescript/Types";

// @desc Get all exercise
// @route GET get/exercise
// @access public
const getExercise = (req:Request, res:Response) => {
    res.status(200).json({Exercise: "Exercise sample"})
}

// @desc Get all exercise by body part
// @route GET get/exercise/bodypart
// @access public
const getBodyPartExercise = (req:Request, res:Response) => {
    res.status(200).json({Exercise: "Body Exercise sample"})
}

// @desc Get all exercise base on bmi
// @route GET get/exercise/:bmi
// @access public
const getExerciseByBMI = (req:Request, res:Response) => {
    res.status(200).json({Exercise: `Exercise sample, BMI:${req.params.bmi}`})
}

// @desc Get all exercise by body part base on bmi
// @route GET get/exercise/bodypart/bmi
// @access public
const getBodyPartExerciseByBMI = (req:Request,res:Response) => {
    res.status(200).json({Exercise: `Body Exercise sample, BMI:${req.params.bmi}`})
}

const addExercise = (req:Request<{},{},ExerciseType>, res:Response) => {    
    try {
        const newExercise = ExerciseModel.create({
            bodyPart: req.body.bodyPart,
            equipment: req.body.equipment,
            gifUrl: req.body.gifUrl,
            name: req.body.name,
            target: req.body.target
        });
        res.status(200).send(newExercise);
    } catch (error) {
        res.json({Error: error})
    }
    console.log(req.body)

}

export {
    getExercise,
    getBodyPartExercise,
    getExerciseByBMI,
    getBodyPartExerciseByBMI,
    addExercise
}
