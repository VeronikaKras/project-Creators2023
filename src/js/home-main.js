import axios from 'axios';
import Notiflix from 'notiflix';
import {Spinner} from 'spin.js';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';


const categoriesList = document.querySelector('.categories-list');
const booksSection = document.querySelector('.gallery');
const categoryTitle = document.querySelector('.category-title');
const oneCategoryContainer = document.querySelector('.one-category-container')
const oneCategoryGallery = document.querySelector('.one-category-gallery');
const homeContainer = document.querySelector('.home-container');
const categorySection = document.querySelector('.category-gallery');
const mainTitle = document.querySelector('.home-main-span');
const mainTitleLastWtord = document.querySelector('.home-main-span-lastword');

categoriesList.addEventListener('click', onChooseCategory);

const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#4f2ee8', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
let target = document.getElementById('spinjs');
let spinner = new Spinner(opts).spin(target);
console.log(target)
function onChooseCategory(evt) {
  for (const cat of categoriesList.children) {
    cat.classList.remove('is-chosen');
    if (
      evt.target.textContent.toLowerCase() === cat.textContent.toLowerCase()
    ) {
      cat.classList.add('is-chosen');

      if (
        evt.target.textContent.toLowerCase() ===
        categoriesList.firstElementChild.textContent.toLowerCase()
      ) {
        location.reload();
      }
    }
  }
}

async function fetchCategories() {
  try {
    const response = await axios.get('/category-list');
    renderCategoriesList(response.data);

    // Додавання обробника подій до кожної кнопки категорії
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(category => {
      category.addEventListener('click', async e => {
        const categoryName = category.textContent;
        categoryTitle.textContent = categoryName;
        categoryTitle.innerHTML = categoryName
          .split(' ')
          .map((word, index, wordsArray) => {
            if (index === wordsArray.length - 1) {
              return `<span class="last-word">${word}</span>`;
            } else {
              return word;
            }
          })
          .join(' ');

        try {
          homeContainer.innerHTML = '';
          booksSection.innerHTML = '';
          target.style.display = 'block';
          const response = await axios.get(
            `/category?category=${categoryName}`
          );
          const books = response.data;
          const markup = renderOneCategoryBooks(books);
          oneCategoryContainer.classList.remove("visually-hidden")
          target.style.display = 'none';
          oneCategoryGallery.innerHTML = markup;

          if (books.length === 0) {
            Notiflix.Notify.warning(
              `No books found in the "${categoryName}" category.`
            );
          }
        } catch (error) {
          console.error('Error fetching books:', error);
          Notiflix.Notify.failure(
            'Failed to fetch books. Please try again later.'
          );
        }
      });
    });
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong');
  }
}

function renderOneCategoryBooks(books) {
  return books
    .map(({ book_image, title, author, _id }) => {
      return `<li class="one-category-item" id="${_id}">
        <div class="one-category-item-card gallery-item-thumb">
        <img class="one-category-item-img" src="${book_image}">
        <div class="one-category-item-hover"><p class="one-category-item-p-hover">quick view</p></div>
        </div>
        <p class="one-category-item-title">${title}</p>
        <p class="one-category-item-author">${author}</p>
        </li>
           `;
    })
    .join('');
}

function createCategoriesMarkup(array) {
  return array
    .map(({ list_name }) => `<li class="category-item">${list_name}</li>`)
    .join('');
}

function renderCategoriesList(data) {
  categoriesList.insertAdjacentHTML('beforeend', createCategoriesMarkup(data));
}

async function fetchBooks() {
  mainTitle.textContent = 'Best Sellers';
  mainTitleLastWtord.textContent = ' Books';
 
  try {
    const { data } = await axios.get('/top-books');
    const markup = renderList(data);
    target.style.display = 'none';
    booksSection.innerHTML = markup;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong');
  }
}

function renderList(data) {
  return data
    .map(({ list_name, books }) => {
      return `<li class="main-gallery-item">
        <h2 class="gallery-item-genre">${list_name}</h2>
        <ul class="gallery-category">
          ${renderCategories(books)}
        </ul>
        <button type="button" class="gallery-button">SEE MORE</button>
      </li>`;
    })
    .join('');
}

fetchCategories();

fetchBooks();

async function fetchByCategory(category) {
  booksSection.style.display = 'none';
 target.style.display = 'block';
  try {
    
    const { data } = await axios.get(`/category?category=${category}`);
    if (data.length === 0) {
      return Notiflix.Notify.info('Книги закінчились');
    }
   
    const markup = renderOneCategory(data);
    
    target.style.display = 'none';
    categorySection.innerHTML = markup;
  } catch (error) {
    Notiflix.Notify.failure('Помилка: ', error.message);
  }
}

function renderCategories(books) {
  return books
    .map(({ book_image, title, author, _id }) => {
      return `<li class="gallery-item" id="${_id}">
              <div class="gallery-item-thumb">
              <img class="gallery-item-image" loading="lazy" src="${book_image}">
              <div class="gallery-item-hover"><p class="gallery-item-p-hover">quick view</p></div>
              </div>
              <p class="gallery-item-title">${title}</p>
              <p class="gallery-item-author">${author}</p>
              </li>
              `;
    })
    .join('');
}

function renderOneCategory(data) {
  return data
    .map(({ book_image, title, author, _id }) => {
      return `<li class="gallery-item" id="${_id}">
              <div class="gallery-item-thumb">
              <img class="gallery-item-image" loading="lazy" src="${book_image}">
              <div class="gallery-item-hover"><p class="gallery-item-p-hover">quick view</p></div>
              </div>
              <p class="gallery-item-title">${title}</p>
              <p class="gallery-item-author">${author}</p>
              </li>
           `;
    })
    .join('');
}

booksSection.addEventListener('click', onSeeMoreClick);

function onSeeMoreClick(e) {
  if (!e.target.classList.contains('gallery-button')) {
    return;
  }
  console.log(oneCategoryGallery.children);
  const categoryQuery = e.target.parentNode.children[0].textContent;
  const categoryQueryArray = categoryQuery.split(' ');
  mainTitle.textContent = categoryQueryArray
    .slice(0, categoryQueryArray.length - 1)
    .join(' ');
  mainTitleLastWtord.textContent =
    categoryQueryArray[categoryQueryArray.length - 1];
  for (const category of categoriesList.children) {
    category.classList.remove('is-chosen');
    if (categoryQuery.toLowerCase() === category.textContent.toLowerCase()) {
      category.classList.add('is-chosen');
      category.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
  }
  fetchByCategory(categoryQuery);
}
