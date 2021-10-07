# recipe-genie

https://dayi2007.github.io/recipe-genie

Project Description

API Sample
fetch(`${DOMAIN}/complexSearch?query=${value}&apiKey=${API_KEY}&includeNutrition=true`)
        .then((res) => {
            return res.json()
        }).then((resJSON) =>{
            //console.log(resJSON)

            ingredient(resJSON)
        }).catch((error) => {
            console.log(`Error: ${error}`)
        })

MVP

Project Schedule

