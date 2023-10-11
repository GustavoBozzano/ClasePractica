"use strict";

/**
 * Muestra por consola un array de los números aleatorios para jugar a la Primitiva.
 * A tener en cuenta:
 * - Los números admitidos en la lotería Primitiva son del 1 al 49
 * - El array de los `números de la suerte` debe contener 6 elementos y no pueden repetirse.
 * - Cada vez que se refresque la página, los números de la consola deben cambiar.
 *
 * Consejos:
 * - Puedes crear una función para que devuelva un único número permitido,
 * y comprobar si dicho número no existe en el array de los `números de la suerte`
 * para añadirlo y si no existe, añadirlo. Para obtener un número permitido, puedes asignar a una variable
 *  la siguiente instrucción para que devuelva un valor entre el mínimo y el máximo incluyendo ambos:
 *
 * `Math.floor(Math.random() * (max - min + 1) + min)`
 *
 * Si quieres saber más sobre Math.random puedes visitar la mdn web docs
 * (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random#obtener_un_n%C3%BAmero_entero_aleatorio_entre_dos_valores_incluyendo_ambos)
 * - Para completar el array de los `números de la suerte` puedes crear un bucle que se repita hasta completar un tamaño de 6 elementos.
 *
 * Bonus: Ordena numéricamente el array antes de mostrarlo por consola. Para saber cómo,
 * consulta la mdn web docs(https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#ordenando_un_array)
 *
 * NOTA: Si te toca la Primitiva puedes repartirlo con tu profe!! 😁
 */
