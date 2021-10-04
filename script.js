//const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch";
//const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch?&pasta";

//const DOMAIN = "https://api.spoonacular.com/food/menuItems/search";
const DOMAIN = "https://api.spoonacular.com/food/ingredients/search";
const API_KEY = "93cb391c8bce4d07a71b178efe54a8cb";


const recipeLibrary  = (value) =>{

fetch(`${DOMAIN}?query=${value}&apiKey=${API_KEY}&includeNutrition=true`)

        .then((res) => {
            return res.json()
        })
        .then((resJSON) =>{
            console.log(resJSON)

            //ingredient(resJSON)
        })
        .catch((error) => {
            console.log(`Error: ${error}`)
        })
}
recipeLibrary("apples");

// const ingredient = (value) => {
//      console.log(pasta)
// }
