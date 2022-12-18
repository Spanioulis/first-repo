/* Ejercicio 1

Teniendo en cuenta el siguiente HTML

<p>Este es el primer párrafo</p>
<p class="parrafo">Este es el segundo párrafo</p>
<p>Este es el tercer párrafo</p>

*/

// Muestra en la consola el texto de cada uno de los párrafos.
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach((paragraph, index) => {
    console.log(`Párrafo ${index + 1} ->`, paragraph.textContent);
});

// Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const classParrafo = document.querySelectorAll('.parrafo');
classParrafo.forEach((paragraph) => console.log('class "parrafo" ->', paragraph.textContent));

// Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
classParrafo.textContent = 'Hola Mundo';
console.log('Nuevo contenido de class "parrafo" ->', classParrafo.textContent);

// Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
classParrafo.forEach((paragraph) => (paragraph.style.backgroundColor = 'red'));

// Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo.
classParrafo.forEach((paragraph) => {
    const span = document.createElement('span');
    span.textContent = ' Infiltrado';
    paragraph.appendChild(span);
});
