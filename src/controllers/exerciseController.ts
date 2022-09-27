import { Request, Response } from "express";

//Model
import ExerciseModel from "../models/exerciseModel";

//Types/Interface
import { ExerciseType } from "../Typescript/Types";

type BodyPartParam = {
  bodyPart: string;
  difficulty: string;
};
type DifficultyParam = {
  difficulty: string;
};

// @desc Get all exercise
// @route GET api/exercise
// @access private
const getExercise = async (req: Request, res: Response) => {
  try {
    const exercise = await ExerciseModel.find();
    res.status(200).json(exercise);
  } catch (error) {
    res.json(error);
  }
};

// @desc Get all exercise based on difficulty
// @route GET api/exercise/difficulty/:difficulty
// @access private
const getExerciseBasedOnDif = async (
  req: Request<DifficultyParam, {}, {}>,
  res: Response
) => {
  try {
    const exercise = await ExerciseModel.find({
      difficulty: req.params.difficulty,
    });
    res.status(200).json(exercise);
  } catch (error) {
    res.json(error);
  }
};

// @desc Get all exercise by body part
// @route GET api/exercise/:bodypart
// @access private
const getBodyPartExercise = async (
  req: Request<BodyPartParam, {}, {}>,
  res: Response
) => {
  try {
    const exercise = await ExerciseModel.find({
      bodyPart: req.params.bodyPart,
    });
    res.status(200).json(exercise);
  } catch (error) {
    res.json(error);
  }
};

// @desc Get all exercise by body part based on difficulty
// @route GET api/exercise/:bodypart/:difficulty
// @access private
const getBodyPartExerciseBasedOnDif = async (
  req: Request<BodyPartParam, {}, {}>,
  res: Response
) => {
  try {
    const exercise = await ExerciseModel.find({
      bodyPart: req.params.bodyPart,
      difficulty: req.params.difficulty,
    });
    res.status(200).json(exercise);
  } catch (error) {
    res.json(error);
  }
};

// @desc Add exercise
// @route post api/exercise/add
// @access private
const addExercise = async (
  req: Request<{}, {}, ExerciseType>,
  res: Response
) => {
  try {
    const newExercise = await ExerciseModel.create({
      bodyPart: req.body.bodyPart,
      equipment: req.body.equipment,
      gifUrl: req.body.gifUrl,
      name: req.body.name,
      target: req.body.target,
      difficulty: req.body.difficulty,
    });
    res
      .status(200)
      .json({ Message: `A new exercise has been added: ${newExercise}` });
  } catch (error) {
    console.log(`Unable to post review: ${error}`);
  }
};

export {
  getExercise,
  getExerciseBasedOnDif,
  getBodyPartExercise,
  getBodyPartExerciseBasedOnDif,
  addExercise,
};
