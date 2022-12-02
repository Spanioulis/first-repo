// Ejercicio 1
//  Crea una función que reciba un número y devuelva el doble de ese número.
const double = (x) => {
    return x * 2;
};
console.log(double(5));
console.log(double(123.2));

// Ejercicio 2
//  Crea una función que reciba un número y devuelva el cuadrado de ese número.
const squared = (x) => x * x;
console.log(squared(6));
console.log(squared(11));

// Ejercicio 3
//  Crea una función que calcule el área de un rectángulo y la muestre por consola.
const area = (x, y) => {
    return x * y;
};
console.log(area(5, 4));
console.log(area(2.25, 4.6));

// Ejercicio 4
//  Crea una función que reciba un número y muestre por consola si es par o impar.
const evenOdd = (num) => {
    num % 2 === 0 ? console.log('even') : console.log('odd');
};
evenOdd(325);
evenOdd(44);

// Ejercicio 5
// Dado el siguiente array de personas:
const personas = [
    { nombre: 'Juan', edad: 18 },
    { nombre: 'María', edad: 16 },
    { nombre: 'Pedro', edad: 20 },
    { nombre: 'Pablo', edad: 15 },
    { nombre: 'Laura', edad: 19 }
];

const adult = (arr) => {
    arr.forEach((element) => {
        if (element.edad >= 18) {
            console.log(element);
        }
    });
};
adult(personas);

const younger = (arr) => {
    arr.sort((a, b) => a.edad - b.edad);
    console.log('Más joven: ', arr[0]);
};
younger(personas);

const older = (arr) => {
    arr.sort((a, b) => b.edad - a.edad);
    console.log('Más mayor: ', arr[0]);
};
older(personas);

/* Ejercicio 6
 Recuerdas el ejercicio de los pokemons? Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
 También vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego */
const pokemnosObj = [
    { nombre: 'Pikachu', tipo: 'eléctrico' },
    { nombre: 'Bulbasaur', tipo: 'planta' },
    { nombre: 'Charmander', tipo: 'fuego' },
    { nombre: 'Charmeleon', tipo: 'fuego' },
    { nombre: 'Squirtle', tipo: 'agua' },
    { nombre: 'Raichu', tipo: 'eléctrico' }
];

const namePokemon = (arr) => {
    const name = arr.map((item) => item.nombre);
    const fire = arr.filter((item) => item.tipo === 'fuego');
    console.log(name);
    console.log(fire);
};
namePokemon(pokemnosObj);
