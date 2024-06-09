/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♥", "♠", "♦", "♣"];
  let numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomPalos = Math.floor(Math.random() * palos.length);
  let randomNumeros = Math.floor(Math.random() * numeros.length);
  let elementPalos = document.getElementsByClassName("palos");
  elementPalos[0].innerHTML = palos[randomPalos];
  elementPalos[1].innerHTML = palos[randomPalos];

  if (palos[randomPalos] === "♥" || palos[randomPalos] === "♦") {
    elementPalos[0].style.color = "red";
    elementPalos[1].style.color = "red";
  } else {
    elementPalos[0];
    elementPalos[1];
  }
  document.querySelector(".numeros").innerHTML = numeros[randomNumeros];
};
