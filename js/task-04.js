
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const valueEl = document.querySelector('span');

valueEl.insertAdjacentHTML("afterbegin", counterValue);

const buttonAllEl = document.querySelectorAll('button');
console.log(buttonAllEl);
const buttonDecrementEl = buttonAllEl[0];
console.log(buttonDecrementEl);
const buttonIncrementEl = buttonAllEl[1];
console.log(buttonIncrementEl);


buttonDecrementEl.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.innerHTML = counterValue;
});
buttonIncrementEl.addEventListener('click', () => {
    counterValue += 1;
valueEl.innerHTML = counterValue;
});


