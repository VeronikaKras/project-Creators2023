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
    addRemoveBtn: document.querySelector('.js-removeButton'),
    backdrop: document.querySelector('.js-backdrop'),
    modal: document.querySelector('.modal'),
    modalContainer: document.querySelector('.modal-container'),
    closeModalBtn: document.querySelector('.js-closeModal'),
    };
async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data);
    refs.modalContainer.innerHTML = markup ;
   }
    
refs.gallery.addEventListener('click', onOpenModal);
refs.galleryContainer.addEventListener('click', onOpenModal);
refs.oneCategoryGallery.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.addRemoveBtn.addEventListener('click', onAddRemoveClick)

function onOpenModal(e) {
  e.preventDefault();
  const myTargetClassList = e.target.parentNode.classList;
  if ((!myTargetClassList.contains('gallery-item-thumb') && !myTargetClassList.contains('gallery-item'))
    && (!myTargetClassList.contains('one-category-item') && !myTargetClassList.contains('one-category-item-card'))) {
    return
  }
    
  const localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal'))
  window.addEventListener('keydown', onEscKey);
  document.body.classList.add('show-modal');
  fetchBooksById(e.target.closest('li').id)
  
  refs.addRemoveBtn.textContent = 'Add to shopping list'

  console.log(localBooks)
  if (localBooks && localBooks.length === 0) {
        return refs.addRemoveBtn.textContent = 'Add to shopping list';
     }
  if (localBooks) {
    localBooks.find(t => {
       if (t._id === e.target.parentNode.id) {
       refs.addRemoveBtn.textContent = 'Remove';
      }
    })
  }
}
function onCloseModal(e) {
    window.removeEventListener('keydown', onEscKey);
    document.body.classList.remove('show-modal');
//   e.target.classList.contains('close-modal') 
  
};
function onBackdropClick(event) {
if(event.currentTarget !== event.target){
    return
  };
  onCloseModal();
}
function onEscKey(event) {
    const ESC_KEY_CODE = 'Escape';
    if(event.code === ESC_KEY_CODE) {
        onCloseModal()
    }
}
function modalRender(data) {
    const { book_image, author, publisher, list_name, title, _id, buy_links, description } = data;
    const book = {
        book_image,
        author,
        publisher,
        list_name,
        title,
        _id,
        buy_links,
        description
    }
    localStorage.setItem('new-book', JSON.stringify(book))
   
    return (
        `
        <img class="modal-img" src="${book_image}"/>
        <h2>${author}</h2>
         <h3>${publisher}</h3>
         <p>${list_name}</p>
         <p>${title}</p>
          <ul class="buy-links">
    <li class="buy-links">
      <a
             href="${buy_links[0].url}"
            class="shop-card-link"
            target="blank"
          >
            <img
              class="buy-links-icon amazon"
              src="${amazon2}" srcset="${amazon1} 1x, ${amazon2} 2x"
              alt="amazon-icon"
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
              class="buy-links-icon apple"
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
              class="buy-links-icon bookstore"
             src="${bookshop2}" srcset="${bookshop1} 1x, ${bookshop2} 2x"  
                           alt="bookstore-icon"
            />
          </a>
        </li>
        </ul>
               `
    )
   }

function onAddRemoveClick(e) {
      const newBook = JSON.parse(localStorage.getItem('new-book'));
  let localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) || [];
  console.log(localBooks)
  if (refs.addRemoveBtn.textContent === 'Remove' && localBooks.find( t => t._id === newBook._id)) {
    console.log(localBooks)
    localBooks.map((t, index, array) => {
        if (t._id === newBook._id) {
            return localBooks.splice(index, 1);
                }  })
    localStorage.setItem("saved-books-in-modal", JSON.stringify(localBooks));
    if (!localBooks.find(t => t._id === newBook._id))
      return refs.addRemoveBtn.textContent = 'Add to shopping list';
  }
    else {
    let newBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) || [];
    newBooks.push(newBook)
    localStorage.setItem("saved-books-in-modal", JSON.stringify(newBooks));
    refs.addRemoveBtn.textContent = 'Remove';
    }
}


