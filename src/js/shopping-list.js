import basketIcon from '../img/shopping/trash.png';
import amazon1 from '../img/shopping/amazon1.png'
import amazon2 from '../img/shopping/amazon2.png'
import apple1 from '../img/shopping/apple1.png'
import apple2 from '../img/shopping/apple2.png'
import bookshop1 from '../img/shopping/bookshop1.png'
import bookshop2 from '../img/shopping/bookshop2.png'
import emptybook1x from '../img/shopping/books1x.png'
import emptybook2x from '../img/shopping/books2x.png'
import { pagination } from './pagination';


const cardList = document.querySelector('.card-list');
const tuiPagDiv = document.querySelector('.tui-pagination');
const savedBooks = JSON.parse(localStorage.getItem("saved-books-in-modal")) ?? [];

if (savedBooks.length === 0 || window.matchMedia('(max-width: 767px)').matches) {
  tuiPagDiv.style.display = "none";
} 
console.log(window.matchMedia('(max-width: 767px)').matches)
window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (e.matches && savedBooks.length > 0){
    tuiPagDiv.style.display = "flex";
  }else {
   tuiPagDiv.style.display = "none";
   }
})

let booksOnPage = 3;
let countPage = 1;
CreateMarkup(savedBooks, countPage);
pagination.setTotalItems(savedBooks.length)
pagination.on('afterMove', (e) => {
    countPage = e.page;
  CreateMarkup(savedBooks, countPage);
  });




function CreateMarkup(arr, countPage) {
  let markup;
  //  pagination.setTotalItems(currentSavedBooks.length)
  let start = (countPage - 1) * booksOnPage;
  let end = start + booksOnPage;
  
  
  if (arr.length) {
      let newMarkup = arr.slice(start, end)
        markup = newMarkup.map(({ _id, book_image, title, list_name, description, author, buy_links }, index) => {
        console.log(buy_links[0].url);
        return `<li class="shop-card" data-id="${_id}"> 
  <img  class="card-img" src="${book_image}" alt="book cover" />
  <div class="shop-card-details">
    <h2 class="shop-card-title">${title}</h2>
    <p class="shop-card-category">${list_name}</p>
    <p class="shop-card-description">${isAvaliableDescription(description)}</p>
    <p class="shop-card-author">${author}</p>
    <ul class="buy-links-list">
    <li class="shop-card-buy-links">
      <a href="${buy_links[0].url}" class="shop-card-link" target="blank">
           <img class="buy-links-icon icon-amazon" src="${amazon2}" srcset="${amazon1} 1x, ${amazon2} 2x" alt="amazon-icon"/>
      </a>
      </li>
      <li class="shop-card-buy-links">
         <a
            href="${buy_links[1].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon icon-apple"
              src="${apple2}" srcset="${apple1} 1x, ${apple2} 2x"
              
              alt="apple-icon"
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
              class="buy-links-icon icon-bookstore"
             src="${bookshop2}" srcset="${bookshop1} 1x, ${bookshop2} 2x"  
             
              alt="bookstore-icon"
            />
          </a>
        </li>
        </ul>
     <button type="button" class="basket-btn" id="${_id}">
  <img class="basket" id="${_id}" src="${basketIcon}" alt="basket-illustration" width="18" height="18">
</button>
    </li>
  </div>
</li>`})
      .join('');
    
     cardList.innerHTML = markup; 
    }
    else { 
        emptyLocaleMarkup();
  }
}


// //перевіряємо чи є опис книги. Якщо не має, виводимо повідомлення

function isAvaliableDescription(description) { 
    if (description === '') { 
        return "Sorry, we couldn't find description"
    }
    return description;
}


// // рендеримо розмітку у випадку порожнього localStorage

function emptyLocaleMarkup() { 
    const markup = `<div class="empty-shop-list">
  <p class="empty-shop-list-text">This page is empty, add some books and proceed to order.</p>
<img
           class="empty-shop-list-img"
           src="${emptybook2x}" srcset="${emptybook1x} 1x, ${emptybook2x} 2x"
           alt="books illustration"
         />
</div>`;

    cardList.innerHTML = markup; 
  
}

// Функція видалення карточки 

cardList.addEventListener('click', deleteBook)

function deleteBook(e) {
  
     if (!e.target.classList.contains('basket') && !e.target.classList.contains('basket-btn')) {
    return;
  }
  const localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal'));
  console.log(localBooks);
  
  localBooks.map((t, index) => {
    if (t._id === e.target.id) {
      console.log(t.id)
      return localBooks.splice(index, 1)
    }
  })
  localStorage.setItem("saved-books-in-modal", JSON.stringify(localBooks));
  pagination.setTotalItems(localBooks.length)
  pagination.reset(localBooks.length)
  pagination.movePageTo(Math.ceil(localBooks.length / 3))
  CreateMarkup(localBooks, pagination.getCurrentPage());
  if (localBooks.length === 0) {
  tuiPagDiv.style.display = "none";
  };
   }