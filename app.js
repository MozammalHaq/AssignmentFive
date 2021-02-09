
const searchMeal = () => {
    const searchMealName = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMealName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displyName(data.meals))
}


const displyName = meals => {
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-3 text-center mb-2';
        mealDiv.innerHTML = `
        <a href="" class="single-meal d-block mb-4">
            <div class="meal-photo">
                <img src="${meal.strMealThumb}" alt="">
            </div>
            <h3>${meal.strMeal}</h3>
        </a>
        `;
        mealContainer.appendChild(mealDiv);
    })
}
