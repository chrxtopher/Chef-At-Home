const BASE_URL = process.env.REACT_APP_BASE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const CABOOSE = `apiKey=${API_KEY}`;

export async function getFilteredRecipes(filterObj = {}) {
  const diet = filterObj.diet.join();
  const dishType = filterObj.dishType.join();
  const url = `${BASE_URL}complexSearch?diet=${diet}&type=${dishType}&titleMatch=${filterObj.protein}&number=5&${CABOOSE}`;

  const response = await fetch(url).then((response) => response.json());
  console.log(response);
  return response;
}
