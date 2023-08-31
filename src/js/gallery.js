import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const booksSection = document.querySelector('.gallery')

async function fetchBooks() {
    const { data } = await axios.get('/top-books');
    console.log(data)
    
    try {
        const markup = renderList(data);
     // booksSection.insertAdjacentHTML('beforeend', markup);
     booksSection.innerHTML = markup;
    } catch (error) {
        console.log('Something went wrong')
    }
   }


  
fetchBooks();


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
    console.log(books)
    let markup = '';
    let count = books.length > 5 ? 5 : books.length;
    for (let i = 0; i < count; i += 1){
        markup += `
        <li class="gallery-item">
        <a href="">
        <div class="gallery-item-thumb">
        <img class="gallery-item-image" loading="lazy" src="${books[i].book_image}">
        </div>
        <p class="gallery-item-title">${books[i].title}</p>
        <p class="gallery-item-author">${books[i].author}</p>
        </a>
        </li>
           `
    }
    return markup
}


