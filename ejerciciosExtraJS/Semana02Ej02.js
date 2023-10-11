"use strict";

/**
* Crea una función que genere una contraseña aleatoria de 8 caracteres. 
* Para cada carácter, genera un número aleatorio con `Math.random()`. 
* Si el número es menor que 0.33, añade una letra minúscula aleatoria a la contraseña, 
* si está entre 0.33 y 0.66, añade una letra mayúscula aleatoria, 
* si es mayor que 0.66, añade un número aleatorio. 
* Recuerda que debes convertir los números aleatorios a los caracteres correspondientes.
Se facilitan las tres cadenas de texto diferentes.
*/

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
