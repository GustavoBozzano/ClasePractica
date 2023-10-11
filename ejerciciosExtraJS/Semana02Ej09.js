"use strict";

/**
 * Empezamos a trabajar en un empresa de ITV (Inspección Técnica de Vehículos) y nos piden que mostremos
 * en consola un listado de un array de objetos con información sobre los coches que se encuentran en el array
 * de objetos "matriculasArray" de cuáles deben pasar este año la revisión para mandarles un aviso,
 * para ello sabemos que la matrícula limite máxima para pasar la revisión este año es 'LDR'
 * (todas las matrículas inferiores deben de listarse).
 * Crea una función que recorra todo el array de objetos, y que, aquellos que tengan las 3 letras inferiores
 * a la matrícula límite se muestren en la consola del navegador.
 */

const matriculasArray = [
  {
    matricula: "5648LCY",
    propietario: "Fernando",
    marca: "Peugeot",
    modelo: "3008",
  },
  {
    matricula: "0666LKU",
    propietario: "María",
    marca: "Ford",
    modelo: "Focus",
  },
  {
    matricula: "7754LTH",
    propietario: "Antonio",
    marca: "Toyota",
    modelo: "Corolla",
  },
  {
    matricula: "3812HAB",
    propietario: "Sara",
    marca: "SEAT",
    modelo: "Ibiza",
  },
  {
    matricula: "7546MEK",
    propietario: "Pedro",
    marca: "SEAT",
    modelo: "Arona",
  },
  {
    matricula: "1385LBN",
    propietario: "Carlos",
    marca: "Volkswagen",
    modelo: "T-Roc",
  },
  {
    matricula: "7894KYN",
    propietario: "Sofía",
    marca: "Peugeot",
    modelo: "508",
  },
  {
    matricula: "0012KTD",
    propietario: "Pablo",
    marca: "Kia",
    modelo: "Sportage",
  },
  {
    matricula: "0502NCS",
    propietario: "Silvia",
    marca: "Ford",
    modelo: "Mustang",
  },
  {
    matricula: "2231NAN",
    propietario: "Santiago",
    marca: "Audi",
    modelo: "Q5",
  },
];
