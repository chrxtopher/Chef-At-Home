const BASE_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const CABOOSE = `instructionsRequired=true&number=5&apiKey=${API_KEY}`;

export async function getFilteredRecipes(filterObj = {}) {
  const diet = filterObj.diet.join();
  const dishType = filterObj.dishType.join();
  const url = `${BASE_URL}complexSearch?diet=${diet}&cuisine=${filterObj.cuisine}&type=${dishType}&includeIngredients=${filterObj.protein}&${CABOOSE}`;

  try {
    const response = await fetch(url).then((response) => response.json());
    return response;
  } catch (error) {
    console.error(`ERROR :: ${error}`);
  }
}

export async function getRecipe(recipeId = 111111) {
  const url = `${BASE_URL}${recipeId}/information?apiKey=${API_KEY}}`;

  try {
    const response = await fetch(url).then((response) => response.json());
    return response;
  } catch (error) {
    console.error(`ERROR :: ${error}`);
  }
}
