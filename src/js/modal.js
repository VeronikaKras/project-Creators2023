import axios from 'axios';
axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

  const refs = {
      gallery: document.querySelector('.gallery'),
      galleryContainer: document.querySelector('.category-gallery'),
    closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    modal: document.querySelector('.modal')
};
async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data)
    refs.modal.innerHTML = markup;
    console.log(data)
}
refs.gallery.addEventListener('click', onOpenModal);
refs.galleryContainer.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClick);


function onOpenModal(e) {
    e.preventDefault();
  
    if (!e.target.parentNode.classList.contains('gallery-item-thumb') && !e.target.parentNode.classList.contains('gallery-item')) {
        return
    }
    window.addEventListener('keydown', onEscKey);
    document.body.classList.add('show-modal');
    fetchBooksById(e.target.closest('li').id)
}


function onCloseModal() {
    window.removeEventListener('keydown', onEscKey);
    document.body.classList.remove('show-modal');
  
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
    const { author, publisher, list_name, title} = data;
    return (
        `<h2>${author}</h2>
         <h3>${publisher}</h3>
         <p>${list_name}</p>
         <p>${title}</p>
        `
    )
}