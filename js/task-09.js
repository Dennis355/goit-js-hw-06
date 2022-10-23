// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }




// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>


const bodyEl = document.querySelector('body');

console.log(document.body.style.background);

const buttonColorCange = document.querySelector("button");
console.log(buttonColorCange);

function getRandomHexColor() {
  const getcolor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return getcolor;
}
console.log(getRandomHexColor());
const cpanEl = document.querySelector('span');
console.log(cpanEl);


////// 2 вариант //// через переменную функции
buttonColorCange.addEventListener('click', onClick); 
function onClick (){                             
const color = getRandomHexColor();                 
  document.body.style.backgroundColor = color;         
cpanEl.textContent = color;                         
}