// Ejercicio 1
console.log('Hola Mundo');

// Ejercicio 2
let nombre = 'Sergio';
let edad = 38;
const mayorEdad = true;
const direccion = { address: 'Avda. Diagonal' };
const coloresFavoritos = ['azul', 'negro', 'blanco'];
const lenguajesFavoritos = ['reactJS', 'javascript', 'nodeJS'];
const mejorLenguaje = lenguajesFavoritos[0];
const peorLenguaje = lenguajesFavoritos[2];
console.log(mejorLenguaje);
console.log(peorLenguaje);
console.log('--------');

// Ejercicio 3
let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log('sum', sum);
let num3 = 26;
let num4 = 11;
let resta = num3 - num4;
console.log('resta', resta);
let multi = num1 * num2 * num3;
console.log('multi', multi);
let div = (num1 / num3).toFixed(2);
console.log('div', div);
console.log('--------');

// Ejercicio 4
let saludo = 'hola';
if (saludo === 'hola') console.log('Ha saludado');

// Ejercicio 5
const pokemons = ['Pikachu', 'Bulbasaur', 'Charmander'];
console.log('pokemons', pokemons);
for (let x of pokemons) console.log(x);

// Ejercicio 6
const pokemnosObj = [
    { nombre: 'Pikachu', tipoDePokemon: 'tierra' },
    { nombre: 'Bulbasaur', tipoDePokemon: 'agua' },
    { nombre: 'Charmander', tipoDePokemon: 'fuego' }
];

for (let item of pokemnosObj) {
    if (item.tipoDePokemon === 'fuego')
        console.log('¡' + item.nombre + ' es un pokemon de ' + item.tipoDePokemon + '!');
}
