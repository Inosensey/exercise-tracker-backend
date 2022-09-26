export interface IIngredients {
  id: number;
  ingredients: [
    {
      image: string;
      name: string;
      amount: {
        metric: {
          value: number;
          unit: string;
        };
        us: {
          value: number;
          unit: string;
        };
      };
    }
  ];
}

export interface IMealType {
  Breakfast: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    cal: number;
    mealType: string;
  };
  Lunch: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    cal: number;
    mealType: string;
  };
  Dinner: {
    id: number;
    title: string;
    image: string;
    imageType: string;
    cal: number;
    mealType: string;
  };
}

export interface IMealPlan {
  Monday: IMealType;
  Tuesday: IMealType;
  Wednesday: IMealType;
  Thursday: IMealType;
  Friday: IMealType;
  Saturday: IMealType;
  Sunday: IMealType;
}
