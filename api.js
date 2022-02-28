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

const displayMeals = meals => {
    console.log(meals)
    const container = document.getElementById('meals')
    meals.forEach ( meals => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${meals.strMeal}</h1>
        <button onclick=" loadMealsDetails('${meals.strMeal}') "> click me</button>

        `
        container.appendChild(div)
    })
}

const loadMealsDetails = mealName =>{
    console.log(mealName)
}