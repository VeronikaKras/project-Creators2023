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
    removeBtn: document.querySelector('.js-removeButton'),
    addBtn: document.querySelector('.js-addButton'),
    backdrop: document.querySelector('.js-backdrop'),
      modal: document.querySelector('.modal'),
      modalContainer: document.querySelector('.modal-container')
    };
async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data);
    refs.modalContainer.innerHTML = markup ;
   
}
    
refs.gallery.addEventListener('click', onOpenModal);
refs.galleryContainer.addEventListener('click', onOpenModal);
refs.oneCategoryGallery.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.addBtn.addEventListener('click', onAddClick)
refs.removeBtn.addEventListener('click', onRemoveClick)


let itemBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) || [];
let itemIds = JSON.parse(localStorage.getItem('saved-ids')) || [];

function onOpenModal(e) {
    e.preventDefault();
    const myTargetClassList = e.target.parentNode.classList;
    if ((!myTargetClassList.contains('gallery-item-thumb') && !myTargetClassList.contains('gallery-item'))
    && (!myTargetClassList.contains('one-category-item') && !myTargetClassList.contains('one-category-item-card'))) {
        return
    }
    const localIds = JSON.parse(localStorage.getItem('saved-ids'))
    const localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal'))
    window.addEventListener('keydown', onEscKey);
    document.body.classList.add('show-modal');
    fetchBooksById(e.target.closest('li').id)
    refs.addBtn.disabled = false;
        refs.removeBtn.disabled = true;
    console.log(e.target.parentNode.id)
    console.log(localBooks)
    if (localBooks.length === 0) {
        refs.addBtn.disabled = false;
        refs.removeBtn.disabled = true;
        return
    }
    console.log(localBooks.find(t => {
        console.log(e.target.parentNode.id)
        console.log(t._id)
        return t._id === e.target.parentNode.id
        
         }))
    if (localBooks && localBooks.find(t => {
        console.log(e.target.parentNode.id)
        console.log(t._id)
        if (t._id === e.target.parentNode.id)
        {refs.addBtn.disabled = true;
        refs.removeBtn.disabled = false;}        
         })) {
    //     console.log('є збіг ')
    //    refs.addBtn.disabled = true;
    //    refs.removeBtn.disabled = false;
            }
  
}
function onCloseModal(e) {
    window.removeEventListener('keydown', onEscKey);
    document.body.classList.remove('show-modal');
//   e.target.classList.contains('close-modal') 
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

function onAddClick(e) {
    if (!e.target.classList.contains('js-addButton')) {
    return
    }
    // refs.modal.setAttribute(name, value)
    const newBook = JSON.parse(localStorage.getItem('new-book'));
    
   itemIds.push(newBook._id)
    itemBooks.push(newBook);
    localStorage.setItem("saved-ids", JSON.stringify(itemIds));
    localStorage.setItem("saved-books-in-modal", JSON.stringify(itemBooks));
    const localIds = JSON.parse(localStorage.getItem('saved-ids'))
    const localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal'))
    if (localBooks && localIds.find(t => t === newBook._id)) {
        console.log('є збіг ')
         refs.addBtn.disabled = true;
        refs.removeBtn.disabled = false;
        return
    }
    refs.addBtn.disabled = false;
    refs.removeBtn.disabled = true;
}

function onRemoveClick() {
    const newBook = JSON.parse(localStorage.getItem('new-book'));
    const localIds = JSON.parse(localStorage.getItem('saved-ids'))
    const localBooks = JSON.parse(localStorage.getItem('saved-books-in-modal'))
  console.log(localBooks)
    if (localBooks && localBooks.map((t, index, array) => {
        console.log(t._id)
        console.log(newBook._id)
        if (t._id === newBook._id) {
            console.log(index)
            console.log('є збіг ')
            refs.addBtn.disabled = false;
            refs.removeBtn.disabled = true;
            return localBooks.splice(index, 1)
           
        }
    //    return true
    })) {
        
        console.log(localBooks)
        localStorage.setItem("saved-books-in-modal", JSON.stringify(localBooks));
        
        //  refs.addBtn.disabled = false;
        // refs.removeBtn.disabled = true;
        return
    }
}





