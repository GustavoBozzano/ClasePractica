"use strict";

/**
 * Sigue los siguientes pasos:
 * 1. Crea un array llamado 'frutas' con los siguientes elementos: 'manzana', 'pera', 'plátano', 'kiwi'. Muestra el contenido del array en la consola del navegador.
 * 2. Modifica el segundo elemento del array cambiando su valor por 'cereza'. Muestra el contenido del array en la consola del navegador.
 * 3. Elimina el primer elemento del array por medido de 'delete'. Muestra el contenido del array en la consola del navegador.
 * 4. Añade 'piña' como primer elemento del array. Muestra el contenido del array en la consola del navegador.
 * 5. Muestra en consola la longitud actual del array.
 * 6. Recorre el array por medio de un bucle `for`, en cada iteración debe mostrar en consola la siguiente frase:
 *    'La fruta en la posición `[nº iteración]` es `[valor elemento]`
 *
 * Nota: Ten en cuenta que si modificas un array u objeto después de imprimirlo con `console.log()`,
 * y luego lo expandes en la consola del navegador, verás el estado actual del array u objeto y no el estado
 * que tenía cuando lo imprimiste: esto se debe a cómo manejan los navegadores modernos,
 * como Chrome el método `console.log()`.
 * Cuando se usa `console.log()` para imprimir un objeto o un array en la consola, el navegador puede
 * generar una referencia al objeto en lugar de imprimir una copia de su estado actual.
 * Si deseas que se muestre el contenido correctamente después de cada `console.log`, en vez de mostrar el
 * array en el `console.log`, muestra una copia superficial mediante el método de los arrays `.slice()`:
 * Ejemplo: `console.log(frutas.slice());` en vez de `console.log(frutas);`
 * */
