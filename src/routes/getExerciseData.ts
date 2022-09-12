import express , { Request, Response } from "express";
import {getBodyPartExercise, getBodyPartExerciseByBMI, getExercise, getExerciseByBMI} from "../controllers/exerciseController"

const router = express.Router();

router.get('/', getExercise)
router.get('/bodypart', getBodyPartExercise)
router.get('/:bmi', getExerciseByBMI)
router.get("/bodypart/:bmi", getBodyPartExerciseByBMI)

export default router