// Radio buttons

// Buttons
const randomButton = document.getElementById('random');
const searchButton = document.getElementById('search');
const categoriesButton = document.getElementById('categories');
const searchPlaceholder = document.getElementById('search-area');


// Containers
const categoriesContainer = document.querySelector('.categories-container');

// Handlers
function showCategoriesContainer() {
    categoriesContainer.classList.remove('hide');
}

function hideCategoriesContainer() {
    categoriesContainer.classList.add('hide');
    resetCategories();
}

function showSearchPlaceholder(){
    searchPlaceholder.classList.remove('hide');
}

function hideSearchPlaceholder(){
    searchPlaceholder.classList.add('hide');
}

// Event listeners
categoriesButton.addEventListener('click', showCategoriesContainer);
randomButton.addEventListener('click', hideCategoriesContainer);
searchButton.addEventListener('click', hideCategoriesContainer);
searchButton.addEventListener('click', showSearchPlaceholder);
searchButton.addEventListener('click', hideSearchPlaceholder);
categoriesButton.addEventListener('click', hideSearchPlaceholder);
randomButton.addEventListener('click', hideSearchPlaceholder);

// Categories
const categories = document.querySelectorAll('.category');
const animalCategory = document.getElementById('category-animal');

function removeCategoriesSelection() {
    categories.forEach(function (category) {
        category.classList.remove('select');
    });
}

function resetCategories() {
    removeCategoriesSelection();
    animalCategory.classList.add('select');
}

categories.forEach(function (category) {
    category.addEventListener('click', function () {
        removeCategoriesSelection();
        category.classList.add('select');
    });
});







//function renderCardTemplate(id, quote, category, date) {
   // const template = document.getElementsById('card-template');
   // const id = template.querySelector('.id-container');
   // id.innerText = id;
//}

// 1. SDELAT DESIGN
// 2. SDELAT CARD-template
// 3. dobavit js chtobi otpravlyat zapros i vse huyna huyo moyo
// 4. delat design dlya tablet/mobile (@media)