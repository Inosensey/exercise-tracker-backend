import { IMealPlan, IMealType } from "../Typescript/Interface";
import { MealTypeInfo } from "../Typescript/Types";

// Below 18.5 - Underweight
// 18.5 – 24.9 - Healthy Weight
// 25.0 – 29.9 - Overweight
// 30.0 and Above - Obesity

const MealType = {
  Breakfast: {
    id: 0,
    title: "",
    image: "",
    imageType: "",
    cal: 0,
    mealType: "",
  },
  Lunch: {
    id: 0,
    title: "",
    image: "",
    imageType: "",
    cal: 0,
    mealType: "",
  },
  Dinner: {
    id: 0,
    title: "",
    image: "",
    imageType: "",
    cal: 0,
    mealType: "",
  },
};

const MealPlan: IMealPlan = {
  Monday: MealType,
  Tuesday: MealType,
  Wednesday: MealType,
  Thursday: MealType,
  Friday: MealType,
  Saturday: MealType,
  Sunday: MealType,
};

const setUpMealPlan = (meals: MealTypeInfo[]) => {
  const Breakfast: MealTypeInfo[] = meals.filter(
    (data: MealTypeInfo) => data.mealType === "Breakfast"
  );
  const Lunch: MealTypeInfo[] = meals.filter(
    (data: MealTypeInfo) => data.mealType === "Lunch"
  );
  const Dinner: MealTypeInfo[] = meals.filter(
    (data: MealTypeInfo) => data.mealType === "Dinner"
  );
  const MealType: IMealType[] = Object.values(MealPlan);
  let breakfastMealArr: MealTypeInfo[] = [];
  let lunchMealArr: MealTypeInfo[] = [];
  let DinnerMealArr: MealTypeInfo[] = [];
  for (let innerIndex = 0; innerIndex < MealType.length; innerIndex++) {
    breakfastMealArr.push(breakfastMealCheck(Breakfast, breakfastMealArr));
    lunchMealArr.push(breakfastMealCheck(Lunch, lunchMealArr));
    DinnerMealArr.push(breakfastMealCheck(Dinner, DinnerMealArr));
  }
  return MealType.map((data: IMealType, index: number) => ({
    ...data,
    Breakfast: breakfastMealArr[index],
    Lunch: lunchMealArr[index],
    Dinner: DinnerMealArr[index],
  }));
};

// Getting breakfast meal and
// checking if it is already in the diet plan
const breakfastMealCheck = (
  BreakfastMeal: MealTypeInfo[],
  meal: MealTypeInfo[]
): MealTypeInfo => {
  let Breakfast: MealTypeInfo =
    BreakfastMeal[Math.floor(Math.random() * BreakfastMeal.length)];
  if (meal.some((data: MealTypeInfo) => data.id === Breakfast.id))
    return breakfastMealCheck(BreakfastMeal, meal);
  return Breakfast;
};

// Getting lunch meal and
// checking if it is already in the diet plan
const lunchMealCheck = (
  lunchMeal: MealTypeInfo[],
  meal: MealTypeInfo[]
): MealTypeInfo => {
  const lunch: MealTypeInfo =
    lunchMeal[Math.floor(Math.random() * lunchMeal.length)];
  if (meal.some((data: MealTypeInfo) => data.id === lunch.id))
    return lunchMealCheck(lunchMeal, meal);
  return lunch;
};

// Getting dinner meal and
// checking if it is already in the diet plan
const dinnerMealCheck = (
  dinnerMeal: MealTypeInfo[],
  meal: MealTypeInfo[]
): MealTypeInfo => {
  const dinner: MealTypeInfo =
    dinnerMeal[Math.floor(Math.random() * dinnerMeal.length)];
  if (meal.some((data: MealTypeInfo) => data.id === dinner.id))
    return dinnerMealCheck(dinnerMeal, meal);
  return dinner;
};

export { setUpMealPlan };
