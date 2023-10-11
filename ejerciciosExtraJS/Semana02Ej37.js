"use strict";

/**
 *  1 - Número total de infectados del array de personas.
 *  2 - Número total de infectados en el array de países.
 *  3 - País con más infectados.
 *  4 - Array con el nombre de todas las mascotas.
 *  5 - Array de españoles con perro.
 *  6 - Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota.
 * *  {
 * *      name: 'Pedro',
 * *      age: 35,
 * *      country: 'ES',
 * *      infected: true,
 * *      petName: {
 * *          petName: 'Troski',
 * *          type: 'perro',
 * *      }
 * *  }
 * *
 *  7 - Número total de patas de las mascotas de las personas.
 *  8 - Array con las personas que tienen animales de 4 patas
 *  9 - Array de países que tienen personas con loros como mascota.
 * 10 - Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 */

const persons = [
  {
    name: "Pedro",
    age: 35,
    code: "ES",
    infected: true,
    petName: "Troski",
  },
  {
    name: "Elisabeth",
    age: 14,
    code: "UK",
    infected: true,
    petName: "Firulais",
  },
  {
    name: "Pablo",
    age: 25,
    code: "ES",
    infected: false,
    petName: "Berritxu",
  },
  {
    name: "Angela",
    age: 18,
    code: "DE",
    infected: false,
    petName: "Noodle",
  },
  {
    name: "Boris",
    age: 50,
    code: "UK",
    infected: true,
    petName: "Leon",
  },
  {
    name: "Donald",
    age: 69,
    code: "US",
    infected: false,
    petName: "Pence",
  },
  {
    name: "Pepito",
    age: 36,
    code: "ES",
    infected: false,
    petName: "Carbón",
  },
];

const pets = [
  {
    petName: "Troski",
    type: "perro",
  },
  {
    petName: "Firulais",
    type: "perro",
  },
  {
    petName: "Berritxu",
    type: "loro",
  },
  {
    petName: "Noodle",
    type: "araña",
  },
  {
    petName: "Leon",
    type: "gato",
  },
  {
    petName: "Pence",
    type: "perro",
  },
  {
    petName: "Carbón",
    type: "gato",
  },
];

const animals = [
  {
    type: "perro",
    legs: 4,
  },
  {
    type: "araña",
    legs: 8,
  },
  {
    type: "gato",
    legs: 4,
  },
  {
    type: "loro",
    legs: 2,
  },
  {
    type: "gallina",
    legs: 2,
  },
];

const countries = [
  {
    code: "CN",
    name: "China",
    population: 1439,
    infected: 81999,
  },
  {
    code: "US",
    name: "Estados Unidos",
    population: 331,
    infected: 112468,
  },
  {
    code: "DE",
    name: "Alemania",
    population: 83,
    infected: 56202,
  },
  {
    code: "ES",
    name: "España",
    population: 46,
    infected: 72248,
  },
  {
    code: "UK",
    name: "Reino Unido",
    population: 67,
    infected: 17301,
  },
];
