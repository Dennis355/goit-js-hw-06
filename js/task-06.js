
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
//перевіряє його вміст щодо правильної кількості введених символів.




const inpetEl = document.querySelector('input');
inpetEl.addEventListener("blur", () => {
    console.log(inpetEl.value.length);  
    if (inpetEl.value.length === Number(inpetEl.getAttribute("data-length"))) {
        console.log('1');  
        inpetEl.classList.add('valid');
      // inpetEl.id = "validation-input.valid";
    } else {  
        console.log('0');  
        inpetEl.classList.add('invalid');
       
    }
  });


