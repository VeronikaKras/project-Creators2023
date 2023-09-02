// import svgIconTrash from '../img/icons.svg';
// import amazon1x from '../img/shopping/amazon1x.png'
// import amazon2x from '../img/shopping/amazon2x.png'
// import apple1x from '../img/shopping/apple1x.png'
// import apple2x from '../img/shopping/apple2x.png'
// import bookshop1x from '../img/shopping/boockshop1x.png'
// import bookshop2x from '../img/shopping/boockshop1x.png'
// import emptybook from '../img/shopping/IMG_9606 1.png'


// const cardList = document.querySelector('.card-list');


// const savedBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) ?? [];
// const savedBooks = JSON.parse(localStorage.getItem('saved-books-in-modal')) ?? [];



// CreateMarkup(savedBooks);
// CreateMarkup(savedBooks);

// //Рендеримо розмітку для книг

// function CreateMarkup(arr) {
//     let markup;

//     // перевіряємо, чи є щось у localStotrage - рендеримо розмітку
//     // якщо порожньо - інша розмітка в блоці else

//     if (arr.length) {
//         markup = arr.map(({ id, book_image, title, list_name, description, author, buy_links }) =>
//             `<li class="shop-card" data-id="${id}">
//   <img src="${book_image}" alt="book cover" />
//   <div class="shop-card-details">
//     <h2 class="shop-card-title">${title}</h2>
//     <p class="shop-card-category">${list_name}</p>
//     <p class="shop-card-description">${isAvaliableDescription(description)}</p>
//     <p class="shop-card-author">${author}</p>
//     <ul>
//     <li class="shop-card-buy-links">
//         <a
//             href="${buy_links[0].url}"
//             class="shop-card-link"
//             target="blank"
//           >
//             <img
//               class="buy-links-icon icon-amazon"
//               src="${amazon2x}" srcset="${amazon1x} 1x, ${amazon2x} 2x" 
//               alt="amazon-icon"
//             />
//           </a>
//       </li>
//       <li class="shop-card-buy-links">
//           <a
//             href="${buy_links[1].url}"
//             class="shop-card-link"
//             target="blank"
//           >
//             <img
//               class="buy-links-icon icon-apple"
//               src="${apple2x}" srcset="${apple1x} 1x, ${apple2x} 2x" 
              
//               alt="apple-icon"
//             />
//           </a>
//         </li>
//      <li class="shop-card-buy-links">
//           <a
//             href="${buy_links[4].url}"
//             class="shop-card-link"
//             target="blank"
//           >
//             <img
//               class="buy-links-icon icon-bookstore"
//              src="${bookshop2x}" srcset="${bookshop1x} 1x, ${bookshop2x} 2x" 
             
//               alt="bookstore-icon"
//             />
//           </a>
//         </li>
//         </ul>
//     </li>
//   </div>
//   <button class="basket">
//     <svg class="basket-btn" width="18" height="18">
//   <use href="${svgIconTrash}"></use>
// </svg>
// </button>
// </li>`)
//      .join('');
//     } else { 
//         emptyLocaleMarkup();
//     }
//       cardList.innerHTML = markup; 
// }



// //перевіряємо чи є опис книги. Якщо не має, виводимо повідомлення

// function isAvaliableDescription(description) { 
//     if (description === '') { 
//         return "Sorry, we couldn't find description"
//     }
//     return description;
// }

// // рендеримо розмітку у випадку порожнього localStorage

// function emptyLocaleMarkup() { 
//     const markup = `<div class="empty-shop-list">
//   <p class="empty-shop-list-text">This page is empty, add some books and proceed to order.</p>
//   <img  class="empty-shop-list-img" src="${emptybook}" alt="books illustration" />
// </div>`;
    
//     cardList.innerHTML = markup; 
// }


// логіка видалення книги при натисканні на корзину


