// const shoppingList = document.querySelector('.shopping-list');

// const savedData = JSON.parse(localeStorage.getItem('saved-books-in-modal'))


// if (savedData) {
//     //відмальовуємо розмітку збереженних книг
// }
 


// якщо породне локал сторидж, виводимо це
// if (!savedData) { 
    // const text = document.createElement('p');
    // text.textContent = 'This page is empty, add some books and proceed to order.'

    // const img = document.createElement('img');
    // img.src = './img/shopping/shop-desc.png';
    // img.alt = 'books';

    // shoppingList.append(text, img);
// }


// function emptyLocaleMarkup() { 
//     const markup = `<div class="empty-shop-list">
//   <p>This page is empty, add some books and proceed to order.</p>
//   <img src="./img/shopping/shop-desc.png" alt="books" />
// </div>`;
    
//     shoppingList.insertAdjacentElement("beforeend", markup); 
// }


//Малюємо розмітку для книг

// function CreateMarkup(arr) {
//     const markup = arr.map(({ id, book_image, title, list_name, description, author },
//         buy_links: { name, url }) => 
//     `<li data-id="${id}">
//   <img src="${book_image}" alt="" />
//   <div class="card-description">
//     <h2>${title}</h2>
//     <p class="category">${list_name}</p>
//     <p class="description">${description}</p>
//     <p class="author">${author}</p>
//     <button class="basket"><svg class="" width="" height="">
//   <use href=""></use>
// </svg></button>
//     <li class="buy_links">
//       <li></li>
//       <li></li>
//       <li></li>
//     </li>
//   </div>
// </li>`)
// .join('');
// }

//  "Зверстати шаблон картки однієї книги. Картка з книгою включає
//   зображення обгортки цієї книги
//   назву книги
//   категорія книги
//   короткий опис змісту книги
//   її автора 
//   перелік посилань на торгівельні майданчики, де цю книгу можна придбати
//   та кнопку видалення з Shopping list "



// function CreateMarkup(arr) {
//   const markup = arr.map(({ id, book_image, title, list_name, description, author, buy_links }) => {
//     const limitedBuyLinks = buy_links.slice(0, 3); // Обмежуємо масив лінків до 3 елементів 

//     // Робимо масив з іконками логотипів
//     const logoUrls = {
//       URL_1: 'шлях до лого1.svg',
//       URL_2: 'шлях до лого2.svg',
//       URL_3: 'шлях до лого3.svg',
//     };

//     return `
//       <li data-id="${id}">
//         <img src="${book_image}" alt="" />
//         <div class="card-description">
//           <h2>${title}</h2>
//           <p class="category">${list_name}</p>
//           <p class="description">${description}</p>
//           <p class="author">${author}</p>
//           <button class="basket"><svg class="" width="" height="">
//             <use href=""></use>
//           </svg></button>
//           <ul class="buy_links">
//             ${limitedBuyLinks.map(({ url }) => `
//               <li>
//                 <a href="${url}">
//                   <svg class="logo" width="50" height="50">
//                     <use href="${logoUrls[url]}"></use>
//                   </svg>
//                 </a>
//               </li>
//             `).join('')}
//           </ul>
//         </div>
//       </li>
//     `;
//   }).join('');

//   return markup;
// }