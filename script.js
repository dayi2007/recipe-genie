const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch";
const DOMAIN1 = "https://api.spoonacular.com/recipes/";

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

for(let i=0; i<= 9; i++ ){

     const recipeName = document.createElement("h3");
     recipeName.innerText = recipe.results[i].title;
     const recipeImg = document.createElement("img");
     recipeImg.src = `${recipe.results[i].image}`;
    //  recipeImg.src = `https://spoonacular.com/cdn/ingredients_100x100/${recipe.results[0].image}`;

    const id = recipe.results[i].id;
    const content = document.querySelector(".content");

     content.append(recipeName, recipeImg);
return(id[i])
 
}//For loop 


}//ingredient function

//fetchinh domain1 to get recipe information from imput, when click in the recipe.
// content.addEventListener("click", (ev) => {
//     const recipeId = ( id = recipe.results[i].id) => {
//         fetch(`${DOMAIN1}${id}/information?&apiKey=${API_KEY}`)
//         .then(response => response.json())
//         .then((data) => {
//             console.log(data)})
//     }
//     recipeId()});



const btn = document.querySelector("#btn");
//event listener for search
btn.addEventListener("click", (event) => {
    //event.prentDefault();
    console.log("btn was clicked")
    const ingredients = document.querySelector("#look-ingredients").value;
    recipeLibrary(ingredients);
    document.querySelector("#look-ingredients").value = " ";

});