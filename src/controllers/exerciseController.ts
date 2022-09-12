import { Request, Response } from "express";

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

export {
    getExercise,
    getBodyPartExercise,
    getExerciseByBMI,
    getBodyPartExerciseByBMI
}
