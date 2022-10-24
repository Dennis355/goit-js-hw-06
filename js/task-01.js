// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const itemAllEl = document.querySelectorAll('ul#categories');
// console.log('Number of categories:', itemAllEl.length);

const itemAllEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemAllEl.length);



const categoryName1 = document.querySelectorAll('h2');
console.log('Category:', categoryName1[0].textContent);
const categoryNambers1 = itemAllEl[0].querySelectorAll('li');
console.log('Elements:', categoryNambers1.length);


const categoryName2 = document.querySelectorAll('h2');
console.log('Category:', categoryName2[1].textContent);
const categoryNambers2 = itemAllEl[1].querySelectorAll('li');
console.log('Elements:', categoryNambers2.length);


const categoryName3 = document.querySelectorAll('h2');
console.log('Category:', categoryName3[2].textContent);
const categoryNambers3 = itemAllEl[2].querySelectorAll('li');
console.log('Elements:', categoryNambers3.length);
