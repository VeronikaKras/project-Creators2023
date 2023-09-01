import axios from "axios";
import Notiflix from "notiflix";

axios.defaults.baseURL = 'https://books-backend.p.goit.global/books';

const categories = document.querySelectorAll(".category");
const categoryTitle = document.querySelector(".category-title");
const oneCategoryGallery = document.querySelector(".one-category-gallery");
const booksSection = document.querySelector('.gallery')

    
categories.forEach(category => {
  category.addEventListener("click", async () => {
    const categoryName = category.textContent; // Отримуємо назву категорії
    categoryTitle.textContent = categoryName; // Вставляємо назву категорії в заголовок
    
      try {
        const response = await axios.get(`/category?category=${categoryName}`);
        const books = response.data;
        booksSection.innerHTML = "";//Питання
        const markup = renderOneCategoryBooks(books);
        oneCategoryGallery.innerHTML = markup;
      
      
      if (books.length === 0) {
        Notiflix.Notify.warning(`No books found in the "${categoryName}" category.`);
      } else {
          renderOneCategoryBooks(books);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      Notiflix.Notify.failure("Failed to fetch books. Please try again later.");
    }
  });
});

function renderOneCategoryBooks(books) {
       return books.map(({ book_image, title, author }) => {
        return (
            `<li class="one-category-item">
        <a href="">
        <div class="one-category-item-card">
        <img class="one-category-item-img" src="${book_image}">
        </div>
        <p class="one-category-item-title">${title}</p>
        <p class="one-category-item-author">${author}</p>
        </a>
        </li>
           `)
           }).join('');
}