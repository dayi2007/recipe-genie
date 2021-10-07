const DOMAIN = "https://api.spoonacular.com/recipes/complexSearch";
const DOMAIN1 = "https://api.spoonacular.com/recipes/";

//const DOMAIN = "https://api.spoonacular.com/food/menuItems/search";
//const DOMAIN = "https://api.spoonacular.com/food/ingredients/search";
    //first API KEY gmail@
//const API_KEY = "93cb391c8bce4d07a71b178efe54a8cb";
    //second API KEY developer@
//const API_KEY = "a1529f902bc84599adb136529dc698ef";
    //third API KEY hotmail@
const API_KEY = "289c99784fd74ce69b71ea6824ca68bd";
    //fourth API KEY code@
//const API_KEY = "31298333e3854dc69486fb70810303d4";
    //fifth API KEY noan@
//const API_KEY = "dc7ebcc370ad458fbc4ca1b00ce22d47";


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
    const grocery = document.querySelector("#grocery")
    const myRecipes = document.querySelector("#myRecipes")
    const ingredientsList = document.querySelector("#ingredients")
    recipes.innerText = " "; 

    for(let i=0; i<= 1; i++ ){
   

     const recipeName = document.createElement("h3");
     recipeName.innerText = recipe.results[i].title;
     const recipeImg = document.createElement("img");
     recipeImg.src = `${recipe.results[i].image}`;
     const recipeDiv = document.createElement("div");

     const addBnt = document.createElement("button");
     addBnt.type = ("text");
     addBnt.innerText = ("Select Recipe");
     addBnt.id = ("select-bnt");
    
     //pair ID with image
    const ID = recipe.results[i].id;
    recipeImg.id = ID;

    //isert extra div to match ID
    const element1 = document.createElement("div");
    const btnSearch = document.createElement("div");
    const toggle = document.createElement("div")
    recipeDiv.id = ("recipeDiv");
    recipes.append(element1);    
    recipeDiv.append(recipeName, recipeImg);
    element1.append(recipeDiv);
    element1.append(btnSearch);
    toggle.id = ("toggle");
    recipeDiv.append(toggle);

    toggle.addEventListener ("click", (evnts) => {
        //toggle.preventDefault ();
        if (recipeDiv.style.display !== "none"){
            recipeDiv.style.display = toggle;
        }   else {
            recipeDiv.style.display = "none";
        }
    });
    
   
   
            console.log(ID)
              recipeDiv.addEventListener("click", (ev) => {
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
                        recipeID.id = "recipeIngredients"
                        // recipeID.innerText = ("Ingredients:");
                        recipeID.innerText = (ingred[j].name);
                        toggle.appendChild(recipeID);
                    }//for loop j
                                       
                    const instruction = product.instructions;
                    console.log(instruction);
                    toggle.append(instruction);
                    

                    
                    
                        addBnt.addEventListener("click", (Event) =>{
                            Event.preventDefault ();
                            console.log("the button was clicked");

                    //insert into picture and name at bottom                             
                            let grabDiv = document.createElement("div")
                            grabDiv.id = "selectedRecipe"
                            let grab = document.createElement("p");
                            grab.innerText = (recipeName.innerText);
                            grabDiv.append(recipeImg);  
                            grabDiv.append(grab);                          
                            myRecipes.append(grabDiv);

                    // add ingredienst to grocery list
                    const recipeID = product.extendedIngredients;
                    recipeID.forEach((recipeID, i) => {
                        console.log(`${i} | ${recipeID.name}`);

                        let groceryList = document.createElement("li")                    
                            groceryList.innerText = recipeID.name;
                            ingredientsList.append(groceryList)})

                            
                        })//event listener select btn   

                        btnSearch.append(addBnt); //btn to select recipe 
                }//product ingred
                 
    }//For loop


}//ingredient function

// const hideDiv = document.getElementById("recipeDiv");
//const toggle = document.getElementById("toggle");

// toggle.addEventListener ("click", (evnts) => {
//     toggle.preventDefault ();
//     if (hideDiv.style.display !== "none"){
//         hideDiv.style.display = "none";
//     }   else {
//         hideDiv.style.display = "flex";
//     }
// });



//start buttons
const chicken = document.getElementById("pasta");
chicken.addEventListener("click", (evnt) =>{
     const chkn = recipeLibrary("pasta")
    console.log("pasta was clicked")
});
const veg = document.getElementById("veg");
veg.addEventListener("click", (evnt) =>{
     const vegetarian = recipeLibrary("vegetarian")
    console.log("veg was clicked")
});
const dessert = document.getElementById("dessert");
dessert.addEventListener("click", (evnt) =>{
     const Dessert = recipeLibrary("dessert")
    console.log("Dessert was clicked")
});

const btn = document.querySelector("#btn");
//event listener for search
btn.addEventListener("click", (event) => {
    //event.prentDefault();
    console.log("btn was clicked")
    const ingredients = document.querySelector("#look-ingredients").value;
    recipeLibrary(ingredients);
    document.querySelector("#look-ingredients").value = " ";

});

  //recipeImg.src = `https://spoonacular.com/cdn/ingredients_100x100/${recipe.results[0].image}`;

                //const variable = document.querySelector(`#${recipe.spoonacularSourceUrl}`)