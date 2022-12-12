/* Ejercicio 4 - ¿Quien le dio like?
 Crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. En los siguientes formatos:
// Si nadie ha dado like
const likes = [];

'Nadie ha dado like'

// Si solo ha dado like una persona
const likes = ['Juan'];

'Juan ha dado like'

// Si han dado like dos personas

const likes = ['Juan', 'María'];

'Juan y María han dado like'

// Si han dado like tres personas

const likes = ['Juan', 'María', 'Pedro'];

'Juan, María y Pedro han dado like'

// Si han dado like más de tres personas

const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];

'Juan, María y 3 personas más han dado like' */

const likesMessage = (array) => {
    if (array.length === 0) {
        console.log('Nadie ha dado like');
    } else if (array.length === 1) {
        console.log(`${array[0]} ha dado like`);
    } else if (array.length === 2) {
        console.log(`${array[0]} y ${array[1]} han dado like`);
    } else if (array.length === 3) {
        console.log(`${array[0]}, ${array[1]} y ${array[2]} han dado like`);
    } else {
        console.log(`${array[0]}, ${array[1]} y ${array.length - 2} personas han dado like`);
    }
};
// const likes = [];
// const likes = ['Juan'];
// const likes = ['Juan', 'Maria'];
// const likes = ['Juan', 'Maria', 'Pedro'];
const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];

likesMessage(likes);
