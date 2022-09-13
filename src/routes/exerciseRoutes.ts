import express  from "express";
import {addExercise, getBodyPartExercise, getBodyPartExerciseByBMI, getExercise, getExerciseByBMI} from "../controllers/exerciseController"

const router = express.Router();

router.get('/', getExercise)
router.get('/bodypart', getBodyPartExercise)
router.get('/:bmi', getExerciseByBMI)
router.get("/bodypart/:bmi", getBodyPartExerciseByBMI)
router.post("/add", addExercise)

export default router