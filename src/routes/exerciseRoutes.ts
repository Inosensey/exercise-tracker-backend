import express from "express";
import {
  addExercise,
  getBodyPartExercise,
  getBodyPartExerciseBasedOnDif,
  getExercise,
  getExerciseBasedOnDif,
} from "../controllers/exerciseController";

const router = express.Router();

router.get("/", getExercise);
router.get("/difficulty/:difficulty", getExerciseBasedOnDif);
router.get("/:bodyPart", getBodyPartExercise);
router.get("/:bodyPart/:difficulty", getBodyPartExerciseBasedOnDif);
router.post("/add", addExercise);

export default router;
