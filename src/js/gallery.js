import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const booksSection = document.querySelector('.gallery')


const modal = document.querySelector('.modal')

fetchBooks();

async function fetchBooks() {
    const { data } = await axios.get('/top-books');
    
    try {
        const markup = await renderList(data);
        booksSection.innerHTML = markup;
       
    } catch (error) {
        console.log(error.message)
        Notiflix.Notify.failure('Something went wrong');
        console.log('Something went wrong:', error.message)
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
        <button type="button" class="gallery-button">SEE MORE</button></li>
        </li>`
        )
    }
    ).join('');
    
}

function renderCategories(books) {
    return books.map(({ book_image, title, author, _id }) => {
        return (
            `<li class="gallery-item" id=${_id}>
                <div class="gallery-item-thumb">
        <img class="gallery-item-image" loading="lazy" src="${book_image}">
        </div>
        <p class="gallery-item-title">${title}</p>
        <p class="gallery-item-author">${author}</p>
        </li>
           `)
    }).join('');
    
}

const mainGallery = document.querySelector('.gallery');
const container = document.querySelector('.home-container');
console.log(container)
mainGallery.addEventListener('click', openModal)
document.body.addEventListener('click', closeModal)
document.body.addEventListener('keydown', closeModal)
function closeModal(e) {
    console.log(e.target)
    console.log(e.currentTarget)
    if (e.target !== e.currentTarget) {
        return
    }
      
        modal.classList.add('visually-hidden');
    
    
}

function onEscClose(e) {
        if (modal.classList.contains("is-hidden")) {
      return;
    };
    if (e.key !== 'Escape') {
            return;
    }
    modal.classList.add('visually-hidden');
  
}

function removeListeners() {
    document.body.removeEventListener('click', closeModal)
   document.body.removeEventListener('keydown', closeModal)
}
   

function openModal(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target.closest('li').id)
    fetchBooksById(e.target.closest('li').id)
    modal.classList.toggle('visually-hidden')
}

async function fetchBooksById(id) {
    const { data } = await axios.get(`/${id}`);
    const markup = modalRender(data);
    modal.innerHTML = markup;
    console.log(data)     
}

function modalRender(data) {
    const { author, publisher } = data;
    return (
        `<h2>${author}</h2>
        <h3>${publisher}</h3>
        `
    )
}
