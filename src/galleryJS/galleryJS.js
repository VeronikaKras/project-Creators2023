import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const booksSection = document.querySelector('.gallery')

async function fetchBooks() {
    const { data } = await axios.get('/top-books');
    console.log(data)
    const markup = onSearchRender(data);
   booksSection.insertAdjacentHTML('beforeend', markup);
}

fetchBooks();


function onSearchRender(data) {
    return data.map(item => item.books.map(({ list_name, book_image, author, title }) => {
         return (
            `<li class="gallery-item"><h2 class="gallery-item-genre">${list_name}</h2>
                <img class="gallery-item-image" src="${book_image}"
                <p class="gallery-item-title">${title}</p>
                <p class="gallery-item-author">${author}</p>
                <button type="button" class="gallery-button">SEE MORE</button></li>`
        )
    }).join('')
          
       
    ).join('')
}

