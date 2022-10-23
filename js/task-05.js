

// апиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
//підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputEl = document.querySelector('input'); 
console.log(inputEl);
console.log(inputEl.value);

const spanEl = document.querySelector('span'); 
const spanElContent = spanEl.textContent;
console.log(spanEl);
console.log(spanElContent);



inputEl.addEventListener('input', setOutput); 
function setOutput() {
console.log(inputEl.value);
if(inputEl.value !== ''){ 
 spanEl.innerHTML =  inputEl.value;}
 else spanEl = spanElContent 
};

   







