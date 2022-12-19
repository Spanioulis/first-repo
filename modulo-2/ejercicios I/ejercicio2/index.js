/* Ejercicio 2

Teniendo en cuenta el siguiente array de objetos.

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

Añade también el atributo title con el valor Usuario premium a los usuarios premium.
*/
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];

// Crea una lista no ordenada con el nombre de cada usuario.
const usersDiv = document.querySelector('.users');
const ul = document.createElement('ul');

users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user.name;
    li.dataset.premium = user.isPremium;

    ul.appendChild(li);
});

usersDiv.appendChild(ul);

// Resalta con el background-color gold a los usuarios premium.
const list = document.querySelectorAll('li');
list.forEach((li) => {
    if (li.dataset.premium === 'true') {
        li.classList.add('premium');
    }
});

// Añade también el atributo title con el valor Usuario premium a los usuarios premium.
list.forEach((li) => {
    if (li.dataset.premium === 'true') {
        li.setAttribute('title', 'Usuario premium');
    }
});

console.log(list);
