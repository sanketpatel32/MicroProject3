let foodData = require('./food.json');
function foodName(params) {
    for (i in foodData) {
        console.log(foodData[i]['foodname']);
    }
}
foodName();

console.log('----------------------------------------------------------------');
function foodNameCategory(name) {
    console.log(`Cetegory: ${name}`);
    for (i in foodData) {
        if (foodData[i]['category'] == name) {
            console.log(foodData[i]['foodname']);
        }
    }
    console.log('----------------------------------------------------------------');
}

let category = ['Vegetables', 'Fruit', 'Protein', 'Nuts', 'Grain', 'Dairy'];

for (i in category) {
    foodNameCategory(category[i]);
};

function sortCalorie(condition) {
    if (condition === 'asec') {
        return foodData.filter((food) => food.calorie < calorie);
    }
    else if (condition === "desc") {
        return foodData.filter((food) => food.calorie > calorie)
    }
}

let calorie = 100;
let asecCalorie = sortCalorie('asec');
let descCalorie = sortCalorie('desc');

function sort(type) {
    if (type === "protein") {
        return foodData.sort((a, b) => b.protiens - a.protiens)
    }
    else if (type === "carb") {
        return foodData.sort((a, b) => a.cab - b.cab)
    }
}

let protein = sort('protein');
let card = sort('card');
