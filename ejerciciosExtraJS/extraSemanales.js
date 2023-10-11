"use strict";

// Semana01Ej01 //
const num = 46;
const word = "string";
const verif = true;
let indef;
const nulo = null;
console.log(typeof num);
console.log(typeof word);
console.log(typeof verif);
console.log(typeof indef);
console.log(typeof nulo);
//***********************************************************************************/
// Semana01Ej02 //
let tarjeta = "1234543278874532";
let ultimosNumeros = tarjeta.slice(-4);
tarjeta = ultimosNumeros.padStart(16, "*");
console.log(tarjeta);
//***********************************************************************************/
// Semana01Ej03 //
const birthYear = 1977;
let currentYear = new Date();
currentYear = currentYear.getFullYear();
let personAge = currentYear - birthYear;
console.log(personAge + " años");
//***********************************************************************************/
// Semana01Ej04 //
let temperaturaFahrenheit = 80;
let temperaturaCelsius = Math.round(((temperaturaFahrenheit - 32) * 5) / 9);
console.log(`${temperaturaCelsius} °C`);
//***********************************************************************************/
// Semana01Ej05 //
const dolares = 100;
const tasaCambi = 0.943;
let euros = dolares * tasaCambi;
console.log(`U$D ${dolares} al tipo de cambio: ${tasaCambi}, son ${euros}€`);
//***********************************************************************************/
// Semana01Ej06 //
let lanzamiento = Math.random();
if (lanzamiento > 0.5) {
  console.log(`A salido CARA..!!`);
} else {
  console.log(`A salido CRUZ..!!!`);
}
//***********************************************************************************/
// Semana01Ej07 //
const edad = 46;
const peso = "62kg";
console.log(
  `La persona en cuestión tiene ${edad} años, y su peso actual es: ${peso}`
);
//***********************************************************************************/
// Semana01Ej08 //
function division(x, y) {
  if (x > y) {
    let resultado = x / y;
    console.log(`El resultado es: ${resultado}`);
  } else {
    let resultado = y / x;
    console.log(`E resultado es: ${resultado}`);
  }
}
division(200, 40);
//***********************************************************************************/
// Semana01Ej09 //
function mayor(x, y, z) {
  if (x > y && x > z) {
    console.log(`El mayor es: ${x}`);
  } else if (y > x && y > z) {
    console.log(`El mayor es: ${y}`);
  } else {
    console.log(`El mayor es: ${z}`);
  }
}
mayor(3, 2, 10);
//***********************************************************************************/
// Semana01Ej10 //
function imprimirFecha(d, m, a) {
  let fechaNueva = new Date(a, m - 1, d);
  if (d > 31) {
    console.log(`DÍA de la fecha incorrecto`);
  } else if (m > 12) {
    console.log(`MES de la fecha incorrecto`);
  } else if (a > 2030) {
    console.log(`AÑO de la fecha incorrecto`);
  } else {
    console.log(fechaNueva);
  }
}
imprimirFecha(21, 2, 1977);
//***********************************************************************************/
// Semana01Ej11 //
