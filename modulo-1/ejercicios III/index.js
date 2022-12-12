/* Ejercicio 1
 Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".
 */
//! const fruits = [
//     'Apple',
//     'Orange',
//     'Mango',
//     'Banana',
//     'Guava',
//     'Ananá',
//     'Açaí',
//     'Blackberry',
//     'Avocado',
//     'Watermelon',
//     'Coconut',
//     'Fig',
//     'Lemon',
//     'Lime',
//     'Strawberry',
//     'Pineapple',
//     'Pomelo',
//     'Pear'
// ];

// function aFruits(arr) {
//     const startsWithA = arr.filter((item) => item.toLowerCase().startsWith('a'));
//     console.log(startsWithA);
// }

// aFruits(fruits);

/* Ejercicio 2
 Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
 Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir. */

//! const pin = prompt('Introduce el PIN:');
let counter = 1;
// while (counter <= 4)

//* Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir.

//! while (counter <= Infinity) {
//     let tryUser = prompt(`Cuál es el número PIN? Intento nº: ${counter}`);

//     if (pin === tryUser || tryUser.toLowerCase() === 'salir') {
//         alert('¡Eso fue correcto!');
//         break;
//     } else {
//         alert('Lo siento, eso estaba mal.');
//     }
//     counter++;
// }

// document.write(pin);

/* Ejercicio 3
 Crea una función que permita comprobar si un string es un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

 Ahora haz la misma comprobación pero con un array de strings. */

//! const word = prompt('Introduce una palabra:');

// function reverse(w) {
//     if (w === w.split('').reverse().join('')) {
//         document.write('Sí es un PALÍNDPROMO :D');
//     } else {
//         document.write('NO es un palíndromo :(');
//     }
// }

// reverse(word);

const fruits1 = ['apple', 'banana', 'nnaaa', 'belon'];
const newArray = fruits1.reverse();

if (fruits1[0] === newArray[0]) {
    console.log(true);
} else {
    console.log(false);
}
