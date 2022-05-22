let allRecipe = [];

async function getrecipe(name) {
  let cartoona = ``;
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=${name}`
  );
  let findalResult = await response.json();
  allRecipe = findalResult;

  for (let i = 0; i < allRecipe.recipes.length; i++) {
    cartoona += `
    <div class="width">
    <img src="${allRecipe.recipes[i].image_url}" />
    <h2>${allRecipe.recipes[i].title}</h2>
    <p>Desc: <a href="${allRecipe.recipes[i].source_url}" target="_blank">Check here</a></p>
    </div> 
     `;
    document.getElementById("container").innerHTML = cartoona;
  }
}

(async function () {
  await getrecipe("pasta");
  await getrecipe("pizza");
  await getrecipe("salad");
  getrecipe("beef");
})();

let onion = document.getElementById("Onion");
let salad = document.getElementById("salad");
let pizza = document.getElementById("pizza");
let beef = document.getElementById("beef");

onion.addEventListener("click", () => {
  getrecipe("onion");
});
salad.addEventListener("click", () => {
  getrecipe("salad");
});
pizza.addEventListener("click", () => {
  getrecipe("pizza");
});
beef.addEventListener("click", () => {
  getrecipe("beef");
});
