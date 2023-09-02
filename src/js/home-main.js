import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const categoriesList = document.querySelector('.categories-list');
const booksSection = document.querySelector('.gallery');
const categoryTitle = document.querySelector('.category-title');
const oneCategoryGallery = document.querySelector('.one-category-gallery');
const homeContainer = document.querySelector('.home-container')
const categorySection = document.querySelector('.category-gallery');
const mainTitle = document.querySelector('.home-main-span')
const mainTitleLastWtord = document.querySelector('.home-main-span-lastword')

booksSection.addEventListener('click', onSeeMoreClick);

async function fetchCategories() {
  try {
    const response = await axios.get('/category-list');
    renderCategoriesList(response.data);
    
    // Додавання обробника подій до кожної кнопки категорії
    const categories = document.querySelectorAll('.category-item');
    categories.forEach(category => {
      category.addEventListener('click', async () => {
        const categoryName = category.textContent;
        categoryTitle.textContent = categoryName;

          try {
          homeContainer.innerHTML = '';
          booksSection.innerHTML = '';
          const response = await axios.get(`/category?category=${categoryName}`);
          const books = response.data;
          const markup = renderOneCategoryBooks(books);
          oneCategoryGallery.innerHTML = markup;

          if (books.length === 0) {
            Notiflix.Notify.warning(`No books found in the "${categoryName}" category.`);
          }
        } catch (error) {
          console.error('Error fetching books:', error);
          Notiflix.Notify.failure('Failed to fetch books. Please try again later.');
        }
      });
    });
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}
function renderOneCategoryBooks(books) {
       return books.map(({ book_image, title, author }) => {
        return (
            `<li class="one-category-item">
        <a href="">
        <div class="one-category-item-card">
        <img class="one-category-item-img" src="${book_image}">
        </div>
        <p class="one-category-item-title">${title}</p>
        <p class="one-category-item-author">${author}</p>
        </a>
        </li>
           `)
           }).join('');
}

function createCategoriesMarkup(array) {
  return array
    .map(({ list_name }) => `<button type="button" class="category-item">${list_name}</button>`)
    .join('');
}

function renderCategoriesList(data) {
  categoriesList.insertAdjacentHTML('beforeend', createCategoriesMarkup(data));
}

export { fetchCategories };

async function fetchBooks() {
   mainTitle.textContent = 'BEST SELLERS';
    mainTitleLastWtord.textContent = ' BOOKS';
  try {
    const { data } = await axios.get('/top-books');
    const markup = renderList(data);
    booksSection.innerHTML = markup;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong');
  }
}

function renderList(data) {
  return data.map(({ list_name, books }) => {
    return (
      `<li class="main-gallery-item">
        <h2 class="gallery-item-genre">${list_name}</h2>
        <ul class="gallery-category">
          ${renderCategories(books)}
        </ul>
        <button type="button" class="gallery-button">SEE MORE</button>
      </li>`
    );
  }).join('');
}
fetchCategories();

fetchBooks()


async function fetchByCategory(category) {
  try {
     const { data } = await axios.get(`/category?category=${category}`);
     if (data.length === 0) {
      return Notiflix.Notify.info('Книги закінчились')
    }
    const markup = renderOneCategory(data);
    booksSection.style.display = 'none';
    categorySection.innerHTML = markup;
  } catch (error) {
    Notiflix.Notify.failure('Помилка: ', error.message)
  }
   
}

function renderCategories(books) {
  return books
    .map(({ book_image, title, author, _id }) => {
      return `<li class="gallery-item" id="${_id}">
        <div class="gallery-item-thumb">
        <img class="gallery-item-image" loading="lazy" src="${book_image}">
        </div>
        <p class="gallery-item-title">${title}</p>
        <p class="gallery-item-author">${author}</p>
        </li>
           `;
    })
    .join('');
}

function renderOneCategory(data) {
    return data.map(({ book_image, title, author }) => {
      return `<li class="gallery-item">
        <div class="gallery-item-thumb">
        <img class="gallery-item-image" loading="lazy" src="${book_image}">
        </div>
        <p class="gallery-item-title">${title}</p>
        <p class="gallery-item-author">${author}</p>
        </li>
           `;
    })
    .join('');
}

function onSeeMoreClick(e) {
    if (!e.target.classList.contains('gallery-button')) {
        return
    }
  console.log(oneCategoryGallery.children);
    const categoryQuery = e.target.parentNode.children[0].textContent;
    const categoryQueryArray = categoryQuery.split(' ');
    mainTitle.textContent = categoryQueryArray.slice(0, categoryQueryArray.length - 1).join(' ');
    mainTitleLastWtord.textContent = categoryQueryArray[categoryQueryArray.length - 1];
    for (const category of categoriesList.children) {
        category.classList.remove('category-list-item-active')
        if (categoryQuery.toLowerCase() === category.textContent.toLowerCase()) {
            category.classList.add('category-list-item-active')
                   }
    }
    fetchByCategory(categoryQuery)
}

