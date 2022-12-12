/* Ejercicio 2
 Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
 Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir. */

const pin = prompt('Introduce el PIN:');
let counter = 1;
// while (counter <= 4)

//* Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir.

while (counter <= Infinity) {
    let tryUser = prompt(`Cuál es el número PIN? Intento nº: ${counter}`);

    if (pin === tryUser || tryUser.toLowerCase() === 'salir') {
        alert('¡Eso fue correcto!');
        break;
    } else {
        alert('Lo siento, eso estaba mal.');
    }
    counter++;
}

document.write(pin);
