import axios from 'axios';

import amazon1 from '../img/shopping/amazon1.png'
import amazon2 from '../img/shopping/amazon2.png'
import apple1 from '../img/shopping/apple1.png'
import apple2 from '../img/shopping/apple2.png'
import bookshop1 from '../img/shopping/bookshop1.png'
import bookshop2 from '../img/shopping/bookshop2.png'

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';
  const refs = {
      gallery: document.querySelector('.gallery'),
      galleryContainer: document.querySelector('.category-gallery'),
      oneCategoryGallery: document.querySelector('.one-category-container'),
    closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    modal: document.querySelector('.modal'),
};
async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data);
    refs.modal.innerHTML = markup;
   
    }
refs.gallery.addEventListener('click', onOpenModal);
refs.galleryContainer.addEventListener('click', onOpenModal);
refs.oneCategoryGallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
function onOpenModal(e) {
    e.preventDefault();
    const myTargetClassList = e.target.parentNode.classList;
    if ((!myTargetClassList.contains('gallery-item-thumb') && !myTargetClassList.contains('gallery-item'))
    && (!myTargetClassList.contains('one-category-item') && !myTargetClassList.contains('one-category-item-card'))) {
        return
    }
    window.addEventListener('keydown', onEscKey);
    document.body.classList.add('show-modal');
    fetchBooksById(e.target.closest('li').id)
}
function onCloseModal(e) {
    window.removeEventListener('keydown', onEscKey);
    document.body.classList.remove('show-modal');
  e.target.classList.contains('close-modal')
};
function onBackdropClick(event) {
if(event.currentTarget === event.target){
    onCloseModal();
};
}
function onEscKey(event) {
    const ESC_KEY_CODE = 'Escape';
    if(event.code === ESC_KEY_CODE) {
        onCloseModal()
    }
}
function modalRender(data) {
    const { book_image, title, author, description, _id, buy_links, } = data;
    const book = {
        book_image,
        title,
        author,
        description,
         _id,
        buy_links,
        
    }
        localStorage.setItem('new-book', JSON.stringify(book))
    console.log(book)
    return (
        `<div class="modal-container">
        <img class="modal-img" src="${book_image}"/>
        <div class="modal-text">
        <h2 class="title">${title}</h2>
        <p class="author">${author}</p>
         <p class="description">${description}</p>
        
         </div>
        
        <div class="link-card">

          <ul class="buy-link-card">
    <li class="buy-links">
      <a
             href="${buy_links[0].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="links-icon amazon"
              src="${amazon2}" srcset="${amazon1} 1x, ${amazon2} 2x"
              alt="amazon-icon"
            />
          </a>
      </li>
      <li class="buy-links">
         <a
            href="${buy_links[1].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="links-icon apple"
              src="${apple2}" srcset="${apple1} 1x, ${apple2} 2x"
              
              alt="apple-icon"
            />
          </a>
        </li>
     <li class="buy-links">
          <a
            href="${buy_links[4].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="links-icon bookstore"
             src="${bookshop2}" srcset="${bookshop1} 1x, ${bookshop2} 2x"  
             
              alt="bookstore-icon"
            />
          </a>
        </li>
        </ul>
        </div>
        </div>
        <div class="button">
         <button type = "button" class = "js-addButton" id="${book}">Add to shopping list</button>
         </div>
        
         `
)
}
refs.modal.addEventListener('click', onModalClick)
let itemBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) || [];
function onModalClick(e) {
    if (!e.target.classList.contains('js-addButton')) {
    return
}
const newBook = JSON.parse(localStorage.getItem('new-book'))
console.log(newBook)
   itemBooks.push(newBook);
   localStorage.setItem("saved-books-in-modal", JSON.stringify(itemBooks));
}





