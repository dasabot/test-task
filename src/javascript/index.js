// Buttons
const randomButton = document.getElementById("random");
const searchButton = document.getElementById("search");
const categoriesButton = document.getElementById("categories");
const searchInput = document.getElementById("search-area");

// Containers
const categoriesContainer = document.querySelector(".categories-container");

// Handlers
function showCategoriesContainer() {
  categoriesContainer.classList.remove("hide");
}

function hideCategoriesContainer() {
  categoriesContainer.classList.add("hide");
  resetCategories();
}

function showSearchInput() {
  searchInput.classList.remove("hide");
}

function hideSearchInput() {
  searchInput.classList.add("hide");
}

function handleSearchButtonClick() {
  hideCategoriesContainer();
  showSearchInput();
}

function handleRandomButtonClick() {
  hideCategoriesContainer();
  hideSearchInput();
}

function handleCategoriesButtonClick() {
  showCategoriesContainer();
  hideSearchInput();
}

function handleSearchButtonClick() {
  showSearchInput();
  hideCategoriesContainer();
}

// Event listeners
randomButton.addEventListener("click", handleRandomButtonClick);
categoriesButton.addEventListener("click", handleCategoriesButtonClick);
searchButton.addEventListener("click", handleSearchButtonClick);

// Categories
const categories = document.querySelectorAll(".category");
const animalCategory = document.getElementById("category-animal");

function removeCategoriesSelection() {
  categories.forEach(function (category) {
    category.classList.remove("select");
  });
}

function resetCategories() {
  removeCategoriesSelection();
  animalCategory.classList.add("select");
}

categories.forEach(function (category) {
  category.addEventListener("click", function () {
    removeCategoriesSelection();
    category.classList.add("select");
  });
});

function findCheckedRadio() {
  const nodeList = document.querySelectorAll('input[type="radio"]');
  const radioArray = Array.from(nodeList);

  const checkedButton = radioArray.filter(function (element) {
    return element.checked;
  });

  return checkedButton[0];
}

function getCardTemplate() {
  const cardTemplate = document.getElementById("card-template");
  const card = cardTemplate.content.querySelector(".card");

  return card.cloneNode();
}

async function getRandomJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await response.json();
}

async function handleJokeClick() {
  const checkedRadio = findCheckedRadio();
  const name = checkedRadio.id;

  await getRandomJoke();
}

const jokeButton = document.getElementById("get-joke");

jokeButton.addEventListener("click", handleJokeClick);
