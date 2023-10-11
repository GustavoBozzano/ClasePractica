"use strict";

/**
 * Se proporciona la siguiente función JavaScript, que incrementa una variable global `contador`.
 * Tu tarea es refactorizar esta función para que en lugar de modificar una variable global,
 * se convierta en una _función pura_ que acepte un argumento y devuelva un resultado basado en ese argumento.
 * Comprueba en la consola del navegador si con la refactorización el código sigue funcionando correctamente.
 */

let contador = 0;

function incrementar() {
  contador++;
}

incrementar();
console.log(contador); // Imprime 1
incrementar();
console.log(contador); // Imprime 2
