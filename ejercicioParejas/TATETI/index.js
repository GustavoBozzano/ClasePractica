"use strict";

let turno = "X";
let tablero = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function hacerJugada(event) {
  const fila = event.target.getAttribute("data-fila");
  const columna = event.target.getAttribute("data-columna");

  if (tablero[fila][columna] === "") {
    tablero[fila][columna] = turno;
    event.target.textContent = turno;
    if (verificarGanador()) {
      setTimeout(function () {
        alert(`${turno} has ganado`);
        reiniciarJuego();
      }, 500);
    } else if (tableroLleno()) {
      setTimeout(function () {
        alert("¡Empate!");
        reiniciarJuego();
      }, 500);
    } else {
      cambiarTurno();
    }
  }
}

function cambiarTurno() {
  turno = turno === "X" ? "O" : "X";
}

function verificarGanador() {
  // Verificar filas
  for (let i = 0; i < 3; i++) {
    if (
      tablero[i][0] !== "" &&
      tablero[i][0] === tablero[i][1] &&
      tablero[i][1] === tablero[i][2]
    ) {
      return true;
    }
  }

  // Verificar columnas
  for (let i = 0; i < 3; i++) {
    if (
      tablero[0][i] !== "" &&
      tablero[0][i] === tablero[1][i] &&
      tablero[1][i] === tablero[2][i]
    ) {
      return true;
    }
  }

  // Verificar diagonales
  if (
    tablero[0][0] !== "" &&
    tablero[0][0] === tablero[1][1] &&
    tablero[1][1] === tablero[2][2]
  ) {
    return true;
  }
  if (
    tablero[0][2] !== "" &&
    tablero[0][2] === tablero[1][1] &&
    tablero[1][1] === tablero[2][0]
  ) {
    return true;
  }

  return false;
}

function tableroLleno() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (tablero[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

function reiniciarJuego() {
  tablero = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  turno = "X";

  // Limpiar el contenido de las celdas en el HTML
  const celdas = document.querySelectorAll("td");
  celdas.forEach((celda) => {
    celda.textContent = "";
  });
}
