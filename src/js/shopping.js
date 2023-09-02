import svgIconTrash from '../img/sprite.svg';
import amazon1x from '../img/shopping/amazon_1x.jpg'
import amazon2x from '../img/shopping/amazon_2x.jpg'
import apple1x from '../img/shopping/apple-1x.jpg'
import apple2x from '../img/shopping/apple-2x.jpg'
import bookshop1x from '../img/shopping/bookshop-1x.jpg'
import bookshop2x from '../img/shopping/bookshop-2x.jpg'


////// пробую по запросу малювати розмітку

import axios from 'axios';
// import Notiflix from 'notiflix';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books'; 
// const booksSection = document.querySelector('.gallery');
fetchBooks();
// async function fetchBooks() {
//   const { data } = await axios.get('{1}');
//   try {
//     const markup = renderMarkup(data);
//    cardList.innerHTML = markup; 
//   } catch (error) {
//     console.log(error.message);
//     // Notiflix.Notify.failure('Something went wrong');
//     console.log('Something went wrong:', error.message);
//   }
// }

async function fetchBooks() {
  try {
    const response = await axios.get('/1');
    if (response.status === 200) {
      const markup = renderMarkup(response.data);
      cardList.innerHTML = markup;
    } else {
      console.log('Received a non-200 status code:', response.status);
      // Обработка ошибки, например, Notiflix.Notify.failure()
    }
  } catch (error) {
    console.log(error.message);
    console.log('Something went wrong:', error.message);
    // Обработка ошибки, например, Notiflix.Notify.failure()
  }
}


///////
const cardList = document.querySelector('.card-list');


// const savedBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) ?? [];



// CreateMarkup(savedBooks);

//Рендеримо розмітку для книг

function CreateMarkup(arr) {
    let markup;

    // перевіряємо, чи є щось у localStotrage - рендеримо розмітку
    // якщо порожньо - інша розмітка в блоці else

    if (arr.length) {
        markup = arr.map(({ id, book_image, title, list_name, description, author, buy_links }) =>
            `<li class="shop-card" data-id="${id}">
  <img src="${book_image}" alt="book cover" />
  <div class="shop-card-details">
    <h2 class="shop-card-title">${title}</h2>
    <p class="shop-card-category">${list_name}</p>
    <p class="shop-card-description">${isAvaliableDescription(description)}</p>
    <p class="shop-card-author">${author}</p>
    <button class="basket">
    <svg class="trash-btn" width="18" height="18">
  <use href="${svgIconTrash}"></use>
</svg>
</button>
    <li class="shop-card-buy-links">
        <a
            href="${buy_links[0].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
              src="${amazon2x}" srcset="${amazon1x} 1x, ${amazon2x} 2x" 
              width="48"
              alt="platform-icon"
            />
          </a>
      </li>
      <li class="shop-card-buy-links">
          <a
            href="${buy_links[1].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
              src="${apple2x}" srcset="${apple1x} 1x, ${apple2x} 2x" 
              width="28"
              alt="platform-icon"
            />
          </a>
        </li>
     <li class="shop-card-buy-links">
          <a
            href="${buy_links[4].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
             src="${bookshop2x}" srcset="${bookshop1x} 1x, ${bookshop2x} 2x" 
              width="32"
              alt="platform-icon"
            />
          </a>
        </li>
    </li>
  </div>
</li>`)
     .join('');
    } else { 
        emptyLocaleMarkup();
    }
      cardList.innerHTML = markup; 
}

//перевіряємо чи є опис книги. Якщо не має, виводимо повідомлення

function isAvaliableDescription(description) { 
    if (description === '') { 
        return "Sorry, we couldn't find description"
    }
    return description;
}

// рендеримо розмітку у випадку порожнього localStorage

function emptyLocaleMarkup() { 
    const markup = `<div class="empty-shop-list">
  <p class="empty-shop-list-text">This page is empty, add some books and proceed to order.</p>
  <img  class="empty-shop-list-img" src="" alt="books illustration" />
</div>`;
    
    cardList.innerHTML = markup; 
}





/////// експеримент 


function renderMarkup(arr) {


    // перевіряємо, чи є щось у localStotrage - рендеримо розмітку
    // якщо порожньо - інша розмітка в блоці else
return arr.map(({ id, book_image, title, list_name, description, author, buy_links }) =>
            `<li class="shop-card" data-id="${id}">
  <img src="${book_image}" alt="book cover" />
  <div class="shop-card-details">
    <h2 class="shop-card-title">${title}</h2>
    <p class="shop-card-category">${list_name}</p>
    <p class="shop-card-description">${isAvaliableDescription(description)}</p>
    <p class="shop-card-author">${author}</p>
    <button class="basket">
    <svg class="trash-btn" width="18" height="18">
  <use href="${svgIconTrash}"></use>
</svg>
</button>
    <li class="shop-card-buy-links">
        <a
            href="${buy_links[0].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
              src="${amazon2x}" srcset="${amazon1x} 1x, ${amazon2x} 2x" 
              width="48"
              alt="platform-icon"
            />
          </a>
      </li>
      <li class="shop-card-buy-links">
          <a
            href="${buy_links[1].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
              src="${apple2x}" srcset="${apple1x} 1x, ${apple2x} 2x" 
              width="28"
              alt="platform-icon"
            />
          </a>
        </li>
     <li class="shop-card-buy-links">
          <a
            href="${buy_links[4].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon"
             src="${bookshop2x}" srcset="${bookshop1x} 1x, ${bookshop2x} 2x" 
              width="32"
              alt="platform-icon"
            />
          </a>
        </li>
    </li>
  </div>
</li>`)
     .join('');
      // cardList.innerHTML = renderMarkup; 
}