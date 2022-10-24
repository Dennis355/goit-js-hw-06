
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsAllEl = document.querySelector('ul');
const liIngredientEl = ingredients.map(el => {                   
  const li = document.createElement('li');   
  li.textContent = el                       
  return li                              
});
ingridientsAllEl.append(...liIngredientEl);       
console.log(ingridientsAllEl);



// // const ingridientsAllEl = document.querySelector('ul');
// console.log(ingridientsAllEl);
// for (let i = 0; i < ingredients.length; i++) {
//   const kreatelistIngridientsEl = document.createElement('li');
//   kreatelistIngridientsEl.textContent = ingredients[i];
//   // kreatelistIngridientsEl.classList.add('item');
// }

// console.log(kreatelistIngridientsEl);

// const kreatelistIngridientsEl1 = document.createElement("li");
// console.log(kreatelistIngridientsEl1); 
// kreatelistIngridientsEl1.textContent = ingredients[0];
// kreatelistIngridientsEl1.classList.add('item');


// ingridientsAllEl.prepend(kreatelistIngridientsEl1, kreatelistIngridientsEl2, kreatelistIngridientsEl3, kreatelistIngridientsEl4, kreatelistIngridientsEl5, kreatelistIngridientsEl6 );



// console.log(ingredients[0]);

// const ingridientsAllEl = document.querySelector('ul');
// console.log(ingridientsAllEl);



// const kreatelistIngridientsEl1 = document.createElement("li");
// console.log(kreatelistIngridientsEl1); 
// kreatelistIngridientsEl1.textContent = ingredients[0];
// kreatelistIngridientsEl1.classList.add('item');


// // console.log(kreatelistIngridientsEl1); 
// // console.log( kreatelistIngridientsEl1.append(ingridientsAllEl));




// const kreatelistIngridientsEl2 = document.createElement("li");
// console.log(kreatelistIngridientsEl2); 
// kreatelistIngridientsEl2.textContent = ingredients[1];
// kreatelistIngridientsEl2.classList.add('item');

// const kreatelistIngridientsEl3 = document.createElement("li");
// console.log(kreatelistIngridientsEl3); 
// kreatelistIngridientsEl3.textContent = ingredients[2];
// kreatelistIngridientsEl3.classList.add('item');

// const kreatelistIngridientsEl4 = document.createElement("li");
// console.log(kreatelistIngridientsEl4); 
// kreatelistIngridientsEl4.textContent = ingredients[3];
// kreatelistIngridientsEl4.classList.add('item');

// const kreatelistIngridientsEl5 = document.createElement("li");
// console.log(kreatelistIngridientsEl5); 
// kreatelistIngridientsEl5.textContent = ingredients[4];
// kreatelistIngridientsEl5.classList.add('item');


// const kreatelistIngridientsEl6 = document.createElement("li");
// console.log(kreatelistIngridientsEl6); 
// kreatelistIngridientsEl6.textContent = ingredients[5];
// kreatelistIngridientsEl6.classList.add('item');

// ingridientsAllEl.prepend(kreatelistIngridientsEl1, kreatelistIngridientsEl2, kreatelistIngridientsEl3, kreatelistIngridientsEl4, kreatelistIngridientsEl5, kreatelistIngridientsEl6 );
