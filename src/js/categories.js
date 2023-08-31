import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books';

const categoriesList = document.querySelector('.categories-list');

async function fetchCategories() {
  const response = await axios.get(`${BASE_URL}/category-list`);

  return renderCategoriesList(response.data);
}

function createCategoriesMarkup(array) {
  return array
    .map(
      ({ list_name }) =>
        `<li class="category-item"><a class="category-link">${list_name}</a></li>`
    )
    .join('');
}

function renderCategoriesList(data) {
  categoriesList.insertAdjacentHTML('beforeend', createCategoriesMarkup(data));
}

fetchCategories();

export { fetchCategories };
