const loadSingLeUser = () => {
    fetch ('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}
loadSingLeUser()
const displaySingleUser = user => {
    // console.log(user)
}

const loadsMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
loadsMeals('fish')

// meal db 
    const toggleSpinner = displyaStyle => {
    document.getElementById('spinner').style.display = displyaStyle;
}
    const toggleSearchResult = displyaStyle => {
    document.getElementById('meals').style.display = displyaStyle;
}

const searchmeals = () => {
     const searchText = document.getElementById('search-field').value

    //  displaySpinner
     toggleSpinner('block')
     toggleSearchResult('none')
     loadsMeals(searchText)
     document.getElementById('search-field').value = '';
}

const displayMeals = meals => {
    
    const container = document.getElementById('meals')
    container.textContent = '';
    meals?.forEach ( meals => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${meals.strMeal}</h1>
        <button onclick=" loadMealsDetails('${meals.strMeal}') "> click me</button>

        `
        container.appendChild(div)
    });
    toggleSpinner('none')
    toggleSearchResult('block')
}

const loadMealsDetails = mealName =>{
    console.log(mealName)
}