!function(){function n(n,e,t,o){Object.defineProperty(n,e,{get:t,set:o,enumerable:!0,configurable:!0})}function e(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=t.parcelRequired7c6;null==r&&((r=function(n){if(n in o)return o[n].exports;if(n in a){var e=a[n];delete a[n];var t={id:n,exports:{}};return o[n]=t,e.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,e){a[n]=e},t.parcelRequired7c6=r),r.register("iE7OH",(function(e,t){var o,a;n(e.exports,"register",(function(){return o}),(function(n){return o=n})),n(e.exports,"resolve",(function(){return a}),(function(n){return a=n}));var r={};o=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)r[e[t]]=n[e[t]]},a=function(n){var e=r[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),r.register("aNJCr",(function(e,t){var o;n(e.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var a={};function r(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var e=a[n];return e||(e=function(){try{throw new Error}catch(e){var n=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return r(n[2])}return"/"}(),a[n]=e),e}})),r("iE7OH").register(JSON.parse('{"2AtKG":"shopping.0e2dca62.js","d9SZC":"icons.46892bbb.svg","ev2FX":"amazon1.a7ec3af8.png","hF2Cm":"amazon2.20dbc182.png","jbcP5":"apple1.a9f158e0.png","3hjnB":"apple2.cdd3fb2c.png","gbhDC":"bookshop1.eb5fbc1e.png","6DrtK":"bookshop2.7a15867f.png","gHV93":"books1x.b1c641b6.png","lFbxC":"books2x.9a6517e1.png","1XaNB":"index.39306af0.css","9Xym6":"shopping.7bdb3ac4.js"}')),r("i8Q71");var c;c=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("d9SZC");var s;s=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("ev2FX");var i;i=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("hF2Cm");var l;l=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("jbcP5");var d;d=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("3hjnB");var u;u=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("gbhDC");var p;p=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("6DrtK");var g;g=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("gHV93");var f;f=r("aNJCr").getBundleURL("2AtKG")+r("iE7OH").resolve("lFbxC");var b,v=document.querySelector(".card-list"),h=null!==(b=JSON.parse(localStorage.getItem("saved-books-in-modal")))&&void 0!==b?b:[];function H(n){var t;n.length?(t=n.map((function(n){var t=n._id,o=n.book_image,a=n.title,r=n.list_name,g=n.description,f=n.author,b=n.buy_links;return'<li class="shop-card" data-id="'.concat(t,'"> \n  <img  class="card-img" src="').concat(o,'" alt="book cover" />\n  <div class="shop-card-details">\n    <h2 class="shop-card-title">').concat(a,'</h2>\n    <p class="shop-card-category">').concat(r,'</p>\n    <p class="shop-card-description">').concat(function(n){return""===n?"Sorry, we couldn't find description":n}(g),'</p>\n    <p class="shop-card-author">').concat(f,'</p>\n    <ul class="buy-links-list">\n    <li class="shop-card-buy-links">\n      <a\n             href="').concat(b[0].url,'"\n            class="shop-card-link"\n            target="blank"\n          >\n            <img\n              class="buy-links-icon icon-amazon"\n              src="').concat(e(i),'" srcset="').concat(e(s)," 1x, ").concat(e(i),' 2x"\n              alt="amazon-icon"\n            />\n          </a>\n      </li>\n      <li class="shop-card-buy-links">\n         <a\n            href="').concat(b[1].url,'"\n            class="shop-card-link"\n            target="blank"\n          >\n            <img\n              class="buy-links-icon icon-apple"\n              src="').concat(e(d),'" srcset="').concat(e(l)," 1x, ").concat(e(d),' 2x"\n              \n              alt="apple-icon"\n            />\n          </a>\n        </li>\n     <li class="shop-card-buy-links">\n          <a\n            href="').concat(b[4].url,'"\n            class="shop-card-link"\n            target="blank"\n          >\n            <img\n              class="buy-links-icon icon-bookstore"\n             src="').concat(e(p),'" srcset="').concat(e(u)," 1x, ").concat(e(p),' 2x"  \n             \n              alt="bookstore-icon"\n            />\n          </a>\n        </li>\n        </ul>\n       <button type="button" class="basket-btn" id="').concat(t,'">\n          <svg width="18" height="18" class="basket" id="').concat(t,'">\n            <use href="').concat(e(c),'"></use>\n          </svg>\n    </li>\n  </div>\n</li>')})).join(""),v.innerHTML=t):function(){var n='<div class="empty-shop-list">\n  <p class="empty-shop-list-text">This page is empty, add some books and proceed to order.</p>\n<img\n           class="empty-shop-list-img"\n           src="'.concat(e(f),'" srcset="').concat(e(g)," 1x, ").concat(e(f),' 2x"\n           alt="books illustration"\n         />\n</div>');v.innerHTML=n}()}console.log(h),H(h),v.addEventListener("click",(function(n){if(!n.target.classList.contains("basket"))return;var e=JSON.parse(localStorage.getItem("saved-books-in-modal"));console.log(e),e.map((function(t,o){if(t._id===n.target.id)return console.log(t.id),e.splice(o,1)})),localStorage.setItem("saved-books-in-modal",JSON.stringify(e)),H(e)})),r("xpKCW"),r("9VC5X"),r("jcFG7")}();
//# sourceMappingURL=shopping.0e2dca62.js.map
