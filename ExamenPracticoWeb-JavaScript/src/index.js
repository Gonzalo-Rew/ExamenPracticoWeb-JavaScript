import "./styles.css";

import Juego from "/src/juego.js";
let juego = new Juego(document.getElementById("pantalla"));
let tiempoPasado = 0;

function cicloDeJuego(tiempo) {
  let tiempoDelta = tiempo - tiempoPasado;
  tiempoPasado = tiempo;
  juego.actualizar(tiempoDelta);
  juego.dibujar();
  requestAnimationFrame(cicloDeJuego);
}
requestAnimationFrame(cicloDeJuego);
