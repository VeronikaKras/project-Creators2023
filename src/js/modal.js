// https://books-backend.p.goit.global/books/bookId
// import axios from 'axios';
// axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const refs = {
    // openModal: document.querySelector();
    closeModalBtn: document.querySelector('[data-action = "close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onBackdropClic);

function onCloseModal() {
    document.body.classList.remove('show-modal');
};
function onBackdropClic(event) {
if(event.currentTarget === event.Target){
    onCloseModal();
}
}

