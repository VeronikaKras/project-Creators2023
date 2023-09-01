import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const categoriesList = document.querySelector('.categories-list');

async function fetchCategories() {
  const response = await axios.get('/category-list');

  try {
    renderCategoriesList(response.data);
  } catch (error) {
    console.log('Something went wrong');
  }
}

function createCategoriesMarkup(array) {
  return array
    .map(({ list_name }) => `<li class="category-item">${list_name}</li>`)
    .join('');
}

function renderCategoriesList(data) {
  categoriesList.insertAdjacentHTML('beforeend', createCategoriesMarkup(data));
}

fetchCategories();

export { fetchCategories };
