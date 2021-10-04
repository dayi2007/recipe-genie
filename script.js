const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch";
//const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch?&pasta";

//const DOMAIN = "https://api.spoonacular.com/food/menuItems/search";
//const DOMAIN = "https://api.spoonacular.com/food/ingredients/search";
const API_KEY = "93cb391c8bce4d07a71b178efe54a8cb";


const recipeLibrary  = (value) =>{

fetch(`${DOMAIN}?query=${value}&apiKey=${API_KEY}&includeNutrition=true`)

        .then((res) => {
            return res.json()
        })
        .then((resJSON) =>{
            //console.log(resJSON)

            ingredient(resJSON)
        })
        .catch((error) => {
            console.log(`Error: ${error}`)
        })
}
//recipeLibrary("apples");

const ingredient = (recipe) => {
     console.log(recipe);

     const recipeName = document.createElement("h3");
     recipeName.innerText = recipe.results[0].title;
     const recipeImg = document.createElement("img");
     recipeImg.src = `${recipe.results[0].image}`;
    //  recipeImg.src = `https://spoonacular.com/cdn/ingredients_100x100/${recipe.results[0].image}`;


     console.log(recipeName)



     const content = document.querySelector(".content");

     content.append(recipeName, recipeImg);
    

 
}

const btn = document.querySelector("#btn");

btn.addEventListener("click", (event) => {
    //event.prentDefault();
    console.log("btn was clicked")
    const ingredients = document.querySelector("#look-ingredients").value;
    recipeLibrary(ingredients);
    document.querySelector("#look-ingredients").value = " ";

});