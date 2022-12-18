2- DOM (Document Object Model) 🧐

JavaScript se creó para ser un lenguaje de programación que se ejecuta en el navegador web, a día de hoy se usa en muchos otros entornos (servidores, aplicaciones de escritorio, aplicaciones móviles, IoT...).

Nosotros nos vamos a centrar en aprender JavaScript para el navegador web, y aquí es donde entra el DOM.

¿Qué es el DOM?
El DOM es la abreviatura de Document Object Model, que en español se traduce como Modelo de Objetos del Documento.

El DOM es una interfaz de programación que nos permite manipular el contenido de una página web.

¿Qué es el objeto DOCUMENT?
El objeto DOCUMENT es el objeto que representa el documento HTML que se está mostrando en el navegador.

Es el punto de partida para poder manipular el contenido de la página web.

¿Qué son los nodos?
Los nodos son los elementos que forman parte del documento HTML.

Cada nodo tiene un tipo hay 13 tipos de nodos diferentes, pero los más usados son:

Elemento
Texto
Comentario
Documento
El resto de nodos los puedes consultar en la documentación de MDN.

Cada nodo tiene propiedades y métodos que nos permiten manipularlo. Algunos son comunes a todos los nodos, y otros son específicos de cada tipo de nodo.

La forma de compartir las propiedades y métodos comunes es a través de la herencia de prototipos.

Todos los nodos van a heredar de EventTarget, que es un objeto que nos permite escuchar eventos y de Node, que es el objeto que contiene las propiedades y métodos comunes a todos los nodos.
