/* Ejercicio 5
Dado el siguiente array de objetos:

 */

const users = [
    {
        name: 'Juan',
        age: 25,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar']
    },
    {
        name: 'María',
        age: 30,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar']
    },
    {
        name: 'Pedro',
        age: 20,
        city: 'Madrid',
        hobbies: ['fútbol', 'programar']
    },
    {
        name: 'Laura',
        age: 35,
        city: 'Barcelona',
        hobbies: ['pintar', 'leer', 'programar']
    },
    {
        name: 'Pablo',
        age: 27,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar']
    }
];
//  Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
const usersMadrid = (users) => {
    return users.filter((user) => user.city === 'Madrid');
};
console.log('Usuarios Madrid: ', usersMadrid(users));

//  Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
const olderThan25 = (users) => {
    return users.filter((user) => user.age > 25);
};
console.log('Usuarios mayores de 25: ', olderThan25(users));

//  Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
const usersMadrid25 = (users) => {
    return users.filter((user) => user.city === 'Madrid' && user.age > 25);
};
console.log('Usuarios de Madrid mayores de 25: ', usersMadrid25(users));

//  Encuentra la primera persona que le guste programar.
const firstDeveloper = (users) => {
    return users.find((user) => user.hobbies.includes('programar'));
};
console.log('Primera persona web-developer Madrid: ', firstDeveloper(users));

//  Haz la suma de todas las edades de las personas.
const sumOfAges = (users) => {
    // return users.reduce((acc, initial) => acc + initial, 0);
    return users.reduce((acc, current) => acc + current.age, 0);
};
console.log('Suma de las edades: ', sumOfAges(users));

/*  Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:

[
  {
    city: 'Madrid',
    hobby: 'fútbol',
  },
  {
    city: 'Barcelona',
    hobby: 'pintar',
  },
  // ...
] */

const newArray = (users) => {
    return users.map((user) => {
        return {
            city: user.city,
            hobby: user.hobbies[0]
        };
    });
};
console.log(newArray(users));
