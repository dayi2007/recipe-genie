const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch";
const DOMAIN1 = "https://api.spoonacular.com/recipes/";

//const DOMAIN = "https://api.spoonacular.com/food/menuItems/search";
//const DOMAIN = "https://api.spoonacular.com/food/ingredients/search";
    //first API KEY gmail@
//const API_KEY = "93cb391c8bce4d07a71b178efe54a8cb";
    //second API KEY developer@
//const API_KEY = "a1529f902bc84599adb136529dc698ef";
    //third API KEY hotmail@
//const API_KEY = "289c99784fd74ce69b71ea6824ca68bd";
    //fourth API KEY @codeD
const API_KEY = "31298333e3854dc69486fb70810303d4";


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
     const recipes = document.querySelector(".recipes");
     const content = document.querySelector(".content"); 

for(let i=0; i<= 1; i++ ){

     const recipeName = document.createElement("h3");
     recipeName.innerText = recipe.results[i].title;
     const recipeImg = document.createElement("img");
     recipeImg.src = `${recipe.results[i].image}`;
    //  recipeImg.src = `https://spoonacular.com/cdn/ingredients_100x100/${recipe.results[0].image}`;

    const ID = recipe.results[i].id;
    recipeImg.id = ID;

    //select checkbox
    recipes.append(recipeName, recipeImg);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "btn-check-outlined";
    checkbox.class = "btn btn-outline-primary";    

    recipes.append(checkbox)

    const check = document.getElementById("btn-check-outlined").checked;
    console.log(check)
     if (check == true){
    
            console.log(ID)
            content.addEventListener("click", (ev) => {
                //fetchinh domain1 to get recipe information from input, when click in the recipe.
                fetch(`${DOMAIN1}${ID}/information?&apiKey=${API_KEY}`)
                .then(response => response.json())
                .then((data) => {
                    //console.log(data.extendedIngredients[0].name)
                    ingred(data)})
                });

                const ingred = (product) =>{
                    console.log(product)
                    //let ingred = product.extendedIngrdients
                    for(let j=0; j< product.extendedIngredients.length; j++ ){
                        let ingred = product.extendedIngredients;
                        console.log(ingred[j].name);
                        const recipeID = document.createElement("p");
                        recipeID.innerText = ingred[j].name;
                        content.appendChild(recipeID);
                    }
                }
        }
    }//For loop
}//ingredient function

const btn = document.querySelector("#btn");
//event listener for search
btn.addEventListener("click", (event) => {
    //event.prentDefault();
    console.log("btn was clicked")
    const ingredients = document.querySelector("#look-ingredients").value;
    recipeLibrary(ingredients);
    document.querySelector("#look-ingredients").value = " ";

});



/*
checkbox and

 const cb = document.querySelector('#accept');
        const btn = document.querySelector('#btn');
        btn.onclick = () => {
            const result = cb.value;
            alert(result); // on
        };
*/