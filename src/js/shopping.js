// import svgIconTrash from '../img/icons.svg';
// import amazon from '../img/shopping/amazon.png'
// import amazon1 from '../img/shopping/amazon1x.png'
// import apple from '../img/shopping/apple.png'
// import apple1 from '../img/shopping/apple1x.png'
// import bookshop from '../img/shopping/boockshop.png'
// import emptybook1x from '../img/shopping/books1x.png'
// import emptybook2x from '../img/shopping/books2x.png'


// const KEY_MODAL = 'add-books';


// const cardList = document.querySelector('.card-list');


// const savedBooks = JSON.parse(localStorage.getItem('KEY_MODAL')) ?? [];


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
//       <a
        //      href="${buy_links[0].url}"
        //     class="shop-card-link"
        //     target="blank"
        //   >
        //     <img
        //       class="buy-links-icon icon-amazon-dark"
        //       src="${amazon}"
        //       alt="amazon-icon"
        //     />
        //      <img
        //       class="buy-links-icon icon-amazon-color"
        //       src="${amazon1}"
        //       alt="amazon-icon"
        //     />
        //   </a>
//       </li>
//       <li class="shop-card-buy-links">
//          <a
        //     href="${buy_links[1].url}"
        //     class="shop-card-link"
        //     target="blank"
        //   >
        //     <img
        //       class="buy-links-icon icon-apple-dark"
        //       src="${apple}" 
              
        //       alt="apple-icon"
        //     />
        //     <img
        //       class="buy-links-icon icon-apple-color"
        //       src="${apple1}" 
              
        //       alt="apple-icon"
        //     />
        //   </a>
//         </li>
//      <li class="shop-card-buy-links">
//           <a
//             href="${buy_links[4].url}"
//             class="shop-card-link"
//             target="blank"
//           >
//             <img
//               class="buy-links-icon icon-bookstore"
//              src="${bookshop}"  
             
//               alt="bookstore-icon"
//             />
//           </a>
//         </li>
//         </ul>
//     </li>
//   </div>
//   <button class="basket-btn">
//     <svg class="basket-icon" width="18" height="18">
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
//<img
  //          class="empty-shop-list-img"
    //        src="${emptybook2x}" srcset="${emptybook1x} 1x, ${emptybook2x} 2x"
      //      alt="books illustration"
        //  />
// </div>`;
    
//     cardList.innerHTML = markup; 
// }


// логіка видалення книги при натисканні на корзину

  // Обработчик события клика на родительском элементе (делегирование)
//   cardList.addEventListener("click", (event) => {
//     if (event.target.classList.contains("basket-btn")) {
//       // Удаление родительского элемента (карточки) при клике на кнопку "крестик"
//       event.target.parentNode.remove();
//     }
//   });


