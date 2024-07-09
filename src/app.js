/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const palos = ["♥", "♠", "♦", "♣"];
  const numeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  // Obtener un palo y un número aleatorio
  const randomPalo = palos[Math.floor(Math.random() * palos.length)];
  const randomNumero = numeros[Math.floor(Math.random() * numeros.length)];

  // Asignar los palos a los elementos correspondientes
  const elementPalos = document.getElementsByClassName("palos");
  elementPalos[0].innerHTML = randomPalo;
  elementPalos[1].innerHTML = randomPalo;

  // Cambiar el color del palo usando operador ternario
  const color = (randomPalo === "♥" || randomPalo === "♦") ? "red" : "black";
  elementPalos[0].style.color = color;
  elementPalos[1].style.color = color;

  // Asignar el número al elemento correspondiente
  document.querySelector(".numeros").innerHTML = randomNumero;
};