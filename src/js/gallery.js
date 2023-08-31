import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const booksSection = document.querySelector('.gallery')

fetchBooks();

async function fetchBooks() {
    const { data } = await axios.get('/top-books');
    
    try {
        const markup = renderList(data);
        booksSection.innerHTML = markup;
    } catch (error) {
        console.log(error.message)
        Notiflix.Notify.failure('Something went wrong');
        console.log('Something went wrong:', error.message)
    }
}
   
function renderList(data) {

    return data.map(({list_name, books}) => {
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
    ).join('')   
}

function renderCategories(books) {
    return books.map(({ book_image, title, author }) => {
        return (
            `<li class="gallery-item">
        <a href="">
        <div class="gallery-item-thumb">
        <img class="gallery-item-image" loading="lazy" src="${book_image}">
        </div>
        <p class="gallery-item-title">${title}</p>
        <p class="gallery-item-author">${author}</p>
        </a>
        </li>
           `)
           }).join('');
    }
