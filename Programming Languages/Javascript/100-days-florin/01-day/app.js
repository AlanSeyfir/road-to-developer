const API = "https://www.themealdb.com/api/json/v1/1/random.php";

const btn = document.getElementById("btn");
const tags = document.getElementById("tags");
const test = document.getElementById("test");
const generalInfo = document.querySelector(".general__info");
const infoMeal = document.querySelector(".info__meal");
const videoContainer = document.querySelector(".video__container");

btn.addEventListener("click", () => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => console.log(gatherMeal(data.meals[0])));
});

const gatherMeal = (meal) => {
  const ingredients = [];

  let addGeneralInfo = `
    <h3 class="title__food">${meal.strMeal}</h3>
    <p class="description">${meal.strInstructions}</p>`;

  let addBasicMeal = `
    <img src="${meal.strMealThumb}" alt="meal photo" />
        <p><b>Category: </b> ${meal.strCategory}</p>
        <p><b>Area: </b> ${meal.strArea}</p>
        <p><b>Tags: </b>${meal.strTags}</p>
        `;

  for (let i = 0; i < 20; i++) {
    if (meal[`strIngredient${i}`]) {//- ${meal[`strMeasure${i}`]}
      ingredients.push(`${meal[`strIngredient${i}`]} `);
    }
  }

  let addIngredients = `<ul>
    ${ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
  </ul>`;

  let addMealVideo = `
  <iframe width="420" height="315"
  src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
  </iframe>`;

  generalInfo.innerHTML = addGeneralInfo;
  infoMeal.innerHTML = addBasicMeal;
  videoContainer.innerHTML = addMealVideo;
  test.innerHTML = addIngredients;
  console.log(addIngredients);
};
