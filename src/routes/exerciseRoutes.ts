import express from "express";
import {
  addExercise,
  getBodyPartExercise,
  getBodyPartExerciseBasedOnDif,
  getExercise,
  getExerciseBasedOnDif,
  getExerciseSet,
  updateExercise,
} from "../controllers/exerciseController";

const router = express.Router();

router.get("/", getExercise);
router.get("/difficulty/:difficulty", getExerciseBasedOnDif);
router.get("/:bodyPart", getBodyPartExercise);
router.get("/:bodyPart/:difficulty", getBodyPartExerciseBasedOnDif);
router.get("/exerciseSet/getExerciseSet/:exerciseSet", getExerciseSet);
router.post("/add", addExercise);
router.put("/update", updateExercise);

export default router;
