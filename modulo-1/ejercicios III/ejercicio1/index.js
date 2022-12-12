/* Ejercicio 1
 Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".
 */

const fruits = [
    'Apple',
    'Orange',
    'Mango',
    'Banana',
    'Guava',
    'Ananá',
    'Açaí',
    'Blackberry',
    'Avocado',
    'Watermelon',
    'Coconut',
    'Fig',
    'Lemon',
    'Lime',
    'Strawberry',
    'Pineapple',
    'Pomelo',
    'Pear'
];

function aFruits(arr) {
    const startsWithA = arr.filter((item) => item.toLowerCase().startsWith('a'));
    console.log(startsWithA);
}

aFruits(fruits);
