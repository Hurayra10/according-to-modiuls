const searchFood = async() =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);
    searchField.value = ''; //clear input field

    if(searchText == ''){
        alert('Please input a Food Name')
    }else{//loading data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${searchText}`

        const res = await fetch(url);
        const data = await res.json();
        displaSearchResult(data.meals)
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displaSearchResult(data.meals));
    }
}

const displaSearchResult = meals =>{
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (meals.length == 0) {
        //Sow no result ai kaj ta pore korte hobe.
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =`
        <div onclick="loadMealDetails(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
      </div>
        `;
        searchResult.appendChild(div)
    });
}


const loadMealDetails = async mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url) ;
    const data = await( res.json());
    displaMealDetails(data.meals[0])
    // fetch(url)
    // .then(res => res.json())
    // .then(data =>  displaMealDetails(data.meals[0]))
};

const displaMealDetails = meal =>{
    console.log(meal);
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ''; //clear previous images or data
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text"> ${meal.strInstructions.slice(0, 150)} </p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `;
    mealDetails.appendChild(div)
}






