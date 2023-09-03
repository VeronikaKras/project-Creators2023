// import axios from 'axios';
// axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

  const refs = {
      gallery: document.querySelector('.gallery'),
      galleryContainer: document.querySelector('.category-gallery'),
    closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    modal: document.querySelector('.modal'),
    
};
async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data);
    refs.modal.innerHTML = markup;
    console.log(data)
}
refs.gallery.addEventListener('click', onOpenModal);
refs.galleryContainer.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);


// function onOpenModal(e) {
//     e.preventDefault();
  
//     if (!e.target.parentNode.classList.contains('gallery-item-thumb') && !e.target.parentNode.classList.contains('gallery-item')) {
//         return
//     }
//     window.addEventListener('keydown', onEscKey);
//     document.body.classList.add('show-modal');
//     fetchBooksById(e.target.closest('li').id)
// }


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

// function onEscKey(event) {
//     const ESC_KEY_CODE = 'Escape';
//     if(event.code === ESC_KEY_CODE) {
//         onCloseModal()
        
//     }
// } 

function modalRender(data) {
   const { book_image, author, publisher, list_name, title, _id} = data;
    return ( 
        ` 
        img src="${book_image}">
        <h2>${author}</h2>
         <h3>${publisher}</h3>
         <p>${list_name}</p>
         <p>${title}</p>
         
         <button type = "button" class = "close-modal">x</button>
         <button type = "button" class = "js-addButton" id="${_id}">Add to shopping list</button>
        
        `
)

}  


refs.modal.addEventListener('click', onModalClick)
const itemBooks = [];

function onModalClick(e) {
    if (!e.target.classList.contains('js-addButton')) {
    return
}
const data = {
    id: e.target.id
}

  itemBooks.push(e.target.id);
   localStorage.setItem("saved-books-in-modal", JSON.stringify(itemBooks));
   
}








