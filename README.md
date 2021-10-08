#Recipe-genie

<h1>Recipe Genie </h1>
https://dayi2007.github.io/recipe-genie/

<h2>Project Description</h2>

Let you pick recipes from a big database to select the ones you will like to cook during the week and gives you a list of the ingredients for each recipe that you pick.


<h3>API Snippet <h3>

https://spoonacular.com/food-api

```javascript
const recipeLibrary  = (value) =>{
fetch(`${DOMAIN}/complexSearch?query=${value}&apiKey=${API_KEY}&includeNutrition=true`)
        .then((res) => {
            return res.json()
        }).then((resJSON) =>{
            //console.log(resJSON)

            ingredient(resJSON)
        }).catch((error) => {
            console.log(`Error: ${error}`)
        })
}
```
<h3> MPV </h3>

<li>Get API Connection and take data out of it</li>
<li>Pull out recipes from API</li>
<li>Lets you pick the recipes for the week and store them for you</li>

<h4>PostMVP</h4>

<li>Pull ingredients from selected recipes</li>

<h4>Future</h4>

<li>Pick Random recipes when click on the choices</li>
<li>Animations</li>


<h3>Time frames</h3>

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| HTML Structure| H | 2 hrs| 2 hrs |
| Javascript Structure| H | 4 hrs| 4 hrs |
| Add/test API call| H | 3 hrs| 4 hrs |
| Adding clickable buttons and Event Listeners | H | 2 hrs| 5 hrs |
| Pulling Appropriate data from API | H | 3 hrs| 3 hrs |
| Incorporating Flexbox | H | 1 hrs| 1 hrs |
| Styling page with CSS | H | 5 hrs| 3 hrs |
| Setting and Styling Media Queries | H | 2 hrs| 3 hrs |
| Styling Images| H | 2 hrs| 1 hrs |
| Total | H | 28 hrs| 30 hrs |

