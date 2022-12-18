/* Ejercicio 2

Teniendo en cuenta el siguiente array de objetos

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

Resalta con el background-color gold a los usuarios premium.
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
const list = document.createElement('ul');

const usersName = users.forEach((user) => document.body.append(`<li>${user.name}</li>`));
