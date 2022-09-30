import { Schema } from "mongoose";

export type ExerciseType = {
  _id?: Schema.Types.ObjectId | string;
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  name: string;
  target: string;
  difficulty: string;
  exerciseSet: string;
};
export type MealTypeInfo = {
  id: number;
  title: string;
  image: string;
  imageType: string;
  cal: number;
  mealType: string;
};
