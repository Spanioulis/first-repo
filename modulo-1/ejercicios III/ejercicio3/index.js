/* Ejercicio 3
 Crea una función que permita comprobar si un string es un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

 Ahora haz la misma comprobación pero con un array de strings. */

const word = prompt('Introduce una palabra o frase:');

function reverse(string) {
    const stringWithoutSpaces = string.split(' ').join('');
    const stringReverse = stringWithoutSpaces.split('').reverse().join('');

    if (stringWithoutSpaces === stringReverse) {
        document.write('Sí es un PALÍNDPROMO :D');
    } else {
        document.write('NO es un palíndromo :(');
    }
    return stringWithoutSpaces === stringReverse;
}

reverse(word);

// const esPalindromoArray = (arrayToCheck) => {
//     const arraySinEspacios = arrayToCheck.map((string) => string.split(' ').join(''));
//     const arrayReverse = arraySinEspacios.map((string) => string.split('').reverse().join(''));
//     return arraySinEspacios.map((string, index) => {
//         return {
//             string: arrayToCheck[index],
//             esPalindromo: string === arrayReverse[index]
//         };
//     });
// };

const arrayPalindromo = ['anita lava la tina', 'anita lava la tinaa'];

console.log(esPalindromoArray(arrayPalindromo));
