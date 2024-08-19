//Function that display the selected food
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
//retrieve query parameter
const foodName = getQueryParam('food');
    //check
    if (foodName) {
        loadFoodDetails(foodName);
}

//Function to load food data
function loadFoodDetails(foodName){
    //fetch the food data from JSON file
    fetch('foodData.json')
        .then(response => response.json())
        .then(data => {
            // Find the selected food item by its name
            const food = data.find(item => item.name === foodName);

            //Instructions format
            const renderInstructions = (instructions) => {
                return instructions
                    .map(inst => `
                        ${inst.title ? `<p><strong>${inst.title}<br><br></strong></p>` : ''}
                        ${inst.detail ? `<p>${inst.detail}<br><br></p>` : ''}
                    `)
                    .join('');
            };

            const instructions = [
                {
                    title: food.recipe.instructions1,
                    detail: food.recipe.instructions1_1
                },
                {
                    title: food.recipe.instructions2,
                    detail: food.recipe.instructions2_1
                },
                {
                    title: food.recipe.instructions3,
                    detail: food.recipe.instructions3_1
                },
                {
                    title: food.recipe.instructions4,
                    detail: food.recipe.instructions4_1
                },
                {
                    title: food.recipe.instructions5,
                    detail: food.recipe.instructions5_1
                },
                {
                    title: food.recipe.instructions6,
                    detail: food.recipe.instructions6_1
                },
                {
                    title: food.recipe.instructions7,
                    detail: food.recipe.instructions7_1
                },
                {
                    title: food.recipe.instructions8,
                    detail: food.recipe.instructions8_1
                },
                {
                    title: food.recipe.instructions9,
                    detail: food.recipe.instructions9_1
                },
                {
                    title: food.recipe.instructions10,
                    detail: food.recipe.instructions10_1
                },
                {
                    title: food.recipe.instructions11,
                    detail: food.recipe.instructions11_1
                },
                {
                    title: food.recipe.instructions12,
                    detail: food.recipe.instructions12_1
                },
                {
                    title: food.recipe.instructions13,
                    detail: food.recipe.instructions13_1
                },
                {
                    title: food.recipe.instructions14,
                    detail: food.recipe.instructions14_1
                }
            ];

            const instructionsHTML = renderInstructions(instructions);
            const foodContainer = document.getElementById('foodContainer');

            foodContainer.innerHTML = `
                <h1>${food.name}</h1>
                <img src="${food.image}" alt="${food.name}">
                <h3>Brief Description :</h3>
                <p>${food.description}</p>

                <h3>Recipe :</h3>
                <ul>
                    ${food.recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>

                <h3>How to make it ? :</h3>
                <div class="instructions">${instructionsHTML}</div>

                <h3>Technique :</h3>
                <div class="techniques">${food.techniques}</div>

                <h3>Random Facts :</h3>
                <div class="facts">${food.facts}</div>
            `;
        })
    //check error
    .catch(error => console.error('Error loading food details:', error));
}