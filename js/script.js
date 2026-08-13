// VARIABLES DOM
const display = document.querySelector("#output");
const btnEquals = document.querySelector("#equals");
const btnOperators = document.querySelectorAll("[data-operator]");
const btnNumbers = document.querySelectorAll("[data-number]");

// VARIABLES DE ESTADO - MEMORIA
let operandoActual = "";
let operandoAnterior = "";
let operacion = undefined;

// FUNCIONES

// EVENT LISTENERS - INTERACCIONES
