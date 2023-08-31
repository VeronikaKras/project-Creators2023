import axios from 'axios';

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const booksSection = document.querySelector('.gallery')

async function fetchBooks() {
    const { data } = await axios.get('/top-books');
    console.log(data)
    let markup
    try {
         if (window.matchMedia('(max-width: 767px)').matches) {
        markup = onMobileRender(data);
        } else if (window.matchMedia('(min-width: 1440px)').matches){
   markup = onTabletDesktopRender(data, 5)
    } else  {
     markup = onTabletDesktopRender(data, 3)
    }
     // booksSection.insertAdjacentHTML('beforeend', markup);
     booksSection.innerHTML = markup;
    } catch (error) {
        console.log('Something went wrong')
    }
   
}

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    fetchBooks()
  });
  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    fetchBooks()
  });
  
fetchBooks();


function onTabletDesktopRender(data, number) {
    console.log(data)
    console.log(number)
    return data.map(({list_name, books}) => {
        return (
        `<li>
        <h2>${list_name}</h2>
        <ul>
        ${renderCategories(books, number)}
        </ul>
        <button type="button" class="gallery-button">SEE MORE</button></li>
        </li>`
        )
    }        
    )    
}

function renderCategories(books, number) {
    console.log(books)
    let markup = '';
    let count = books.length > number ? number : books.length;
    for (let i = 0; i < count; i += 1){
        markup += `
<li class="gallery-item">
 <img class="gallery-item-image" src="${books[i].book_image}"
<p class="gallery-item-title">${books[i].title}</p>
<p class="gallery-item-author">${books[i].author}</p>
</li>
        `
    }
    return markup
}


function onMobileRender(data) {
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

