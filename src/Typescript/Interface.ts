export interface IIngredients {
  id: number;
  ingredients: [
    {
      amount: number;
      image: string;
      name: string;
    }
  ];
}
