// Ejercicio 6
/* Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor. */
const fruits = ['apple', 'banana', 'watermelon', 'melon', 'pineapple', 'orange', 'strawberry'];

const sortArray = (arr) => {
    return arr.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        return 0;
    });
};

console.log(sortArray(fruits));

/* Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados. */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const notDuplicates = (numbers) =>
    numbers.filter((number, index) => numbers.indexOf(number) === index);

console.log(notDuplicates(numbers));

/* Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados. */
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
    },
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
        age: 35,
        city: 'Madrid',
        hobbies: ['fútbol', 'poker', 'programar']
    }
];
