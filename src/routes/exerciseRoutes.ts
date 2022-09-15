import express  from "express";
import {addExercise, getBodyPartExercise, getExercise} from "../controllers/exerciseController"

const router = express.Router();

router.get('/', getExercise)
router.get('/:bodyPart', getBodyPartExercise)
router.post("/add", addExercise)

export default router