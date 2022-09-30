import { ExerciseType } from "../Typescript/Types";
import {
  IExercisePerDay,
  IExerciseSchedule,
  IExerciseSet,
} from "../Typescript/Interface";

const setExerciseSet = (ExerciseList: ExerciseType[], setType: string) => {
  const ExerciseSet: IExerciseSet = {
    SetName: "",
    Schedules: [],
  };
  if (setType === "Beginner") {
    const Schedules = getBeginnerExerciseSchedule(ExerciseList);
    ExerciseSet.SetName = "Beginner";
    ExerciseSet.Schedules = Schedules;
  }
  return ExerciseSet;
};

const getBeginnerExerciseSchedule = (ExerciseList: ExerciseType[]) => {
  let ExerciseSchedule: IExerciseSchedule[] = [];
  for (let weeks = 1; weeks <= 4; weeks++) {
    const Exercises = setBeginnerExercises(ExerciseList, weeks);
    ExerciseSchedule.push({ Week: weeks, ExerciseSchedule: Exercises });
  }
  return ExerciseSchedule;
};

const setBeginnerExercises = (
  ExerciseList: ExerciseType[],
  curWeek: number
) => {
  const Arms: ExerciseType[] = ExerciseList.filter(
    (Exercise: ExerciseType) => Exercise.bodyPart === "arms"
  );
  const Chest: ExerciseType[] = ExerciseList.filter(
    (Exercise: ExerciseType) => Exercise.bodyPart === "chest"
  );
  const Shoulders: ExerciseType[] = ExerciseList.filter(
    (Exercise: ExerciseType) => Exercise.bodyPart === "shoulders"
  );
  const Legs: ExerciseType[] = ExerciseList.filter(
    (Exercise: ExerciseType) => Exercise.bodyPart === "legs"
  );
  let Exercises: IExercisePerDay[] = [];
  if (curWeek === 1 || curWeek === 3) {
    Exercises.push({
      Day: "Monday",
      Exercise: [
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell jm bench press"
        )!,
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell alternate biceps curl"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "incline push-up (on box)"
        )!,
        Shoulders.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell bench seated press"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "bodyweight drop jump squat"
        )!,
      ],
    });
    Exercises.push({
      Day: "Wednesday",
      Exercise: [
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell jm bench press"
        )!,
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell alternate biceps curl"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "incline push-up (on box)"
        )!,
        Shoulders.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell bench seated press"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "bodyweight drop jump squat"
        )!,
      ],
    });
    Exercises.push({
      Day: "Friday",
      Exercise: [
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell jm bench press"
        )!,
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell alternate biceps curl"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "incline push-up (on box)"
        )!,
        Shoulders.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell bench seated press"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "bodyweight drop jump squat"
        )!,
      ],
    });
  }
  if (curWeek === 2 || curWeek === 4) {
    Exercises.push({
      Day: "Monday",
      Exercise: [
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell jm bench press"
        )!,
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell alternate biceps curl"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "incline push-up (on box)"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell bench press"
        )!,
      ],
    });
    Exercises.push({
      Day: "Tuesday",
      Exercise: [
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "basic toe touch"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "bodyweight drop jump squat"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) => ExerciseData.name === "dumbbell lunge"
        )!,
      ],
    });
    Exercises.push({
      Day: "Thursday",
      Exercise: [
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell jm bench press"
        )!,
        Arms.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "dumbbell alternate biceps curl"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "incline push-up (on box)"
        )!,
        Chest.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "barbell bench press"
        )!,
      ],
    });
    Exercises.push({
      Day: "Friday",
      Exercise: [
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "basic toe touch"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) =>
            ExerciseData.name === "bodyweight drop jump squat"
        )!,
        Legs.find(
          (ExerciseData: ExerciseType) => ExerciseData.name === "dumbbell lunge"
        )!,
      ],
    });
  }
  return Exercises;
};

export { setExerciseSet };
