"use stict";

/**
 * Crea una función que reciba el siguiente array de objetos con la información de libros y
 * utiliza destructuring para obtener y devolver el nombre del autor del libro y
 *  el título del primer capítulo (`undefined` si no tiene capítulos)
 * de cada libro sin generar ningún error.
 */

const libros = [
  {
    titulo: "Aprendiendo JavaScript",
    autor: "Mateo Pérez",
    capitulos: [
      { titulo: "Introducción a JavaScript", paginas: 15 },
      { titulo: "Variables y Tipos de Datos", paginas: 10 },
      // Más capítulos...
    ],
    // Más propiedades...
  },
  {
    titulo: "Bailando con Python",
    autor: "Laura Rodríguez",
    capitulos: [
      { titulo: "Comenzando con Python", paginas: 20 },
      { titulo: "Tipos de Datos en Python", paginas: 15 },
      // Más capítulos...
    ],
    // Más propiedades...
  },
  {
    titulo: "El lado oscuro de Java",
    autor: "Carlos García",
    // Más propiedades...
  },
  {
    titulo: "Desarrollo Web con HTML y CSS",
    autor: "Ana Sánchez",
    capitulos: [
      { titulo: "HTML Básico", paginas: 7 },
      { titulo: "Estilos con CSS", paginas: 23 },
      // Más capítulos...
    ],
    // Más propiedades...
  },
  {
    titulo: "Fundamentos de C#",
    autor: "Daniel Morales",
    capitulos: [
      { titulo: "Introducción a C++", paginas: 8 },
      { titulo: "Funciones y Clases en C++", paginas: 13 },
      // Más capítulos...
    ],
    // Más propiedades...
  },
];
