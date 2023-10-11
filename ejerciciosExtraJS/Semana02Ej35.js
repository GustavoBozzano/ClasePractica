"use strict";

const datos = {
  empresa: "ACME",
  nif: "12345678Z",
  plantas: [
    { nombre: "Lugo", empleados: 7 },
    { nombre: "Huesca", empleados: 3 },
    { nombre: "Teruel", empleados: 5 },
  ],
  directiva: [
    { nombre: "Ada", sexo: "F", edad: 35 },
    { nombre: "Bruno", sexo: "M", edad: 27 },
    { nombre: "Carla", sexo: "F", edad: 25 },
    { nombre: "David", sexo: "M", edad: 50 },
  ],
};

// Ej1: ¿Cuántos directivos hay de sexo masculino?
// Ej2: ¿Nombres de los directivos mayores de 30?
// Ej3: ¿Cuántos empleados hay en Lugo?
// Ej4: ¿Qué posición en la lista ocupa Carla?
// Ej5: Total de empleados
// Ej6: Suma de las edades de las mujeres de la directiva
// Ej7: Media de las edades de las mujeres de la directiva

const carrera = [
  { nombre: "Alice", tiempo: 16.5, posAnterior: 2 },
  { nombre: "Bob", tiempo: 17, posAnterior: 1 },
  { nombre: "Carol", tiempo: 19, posAnterior: 3 },
  { nombre: "Dave", tiempo: 21.3, posAnterior: 5 },
  { nombre: "Eve", tiempo: 30.1, posAnterior: 4 },
];

// Ej8: Corredores que quedaron en la misma posición el año pasado
//      (ojo: posAnterior cuenta a partir de 1, no de 0...)
// Ej9: Sabiendo que las chicas ocupan las posiciones pares, listar sólo sus nombres.
// Ej10: Reescribe el ej. 5 usando reduce.
// Ej11: Reescribe el ej. 6 usando reduce.
// Ej12: Reescribe el ej. 7 usando reduce.
// Ej13: Ordena la directiva por edad, empezando por el más joven.
