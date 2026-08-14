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

const agregarNumero = (numero) => {
  if (numero === "." && operandoActual.includes(".")) {
    return;
  }
  operandoActual += numero;
};

const agregarPantalla = () => (display.value = operandoActual);

const elegirOperacion = (operador) => {
  if (!operandoActual) return;
  operandoAnterior = operandoActual;
  operacion = operador;
  operandoActual = "";
};

// EVENT LISTENERS - INTERACCIONES

btnNumbers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const numeroPresionado = btn.dataset.number;

    agregarNumero(numeroPresionado);
    agregarPantalla();
  });
});

btnOperators.forEach((btn) => {
  btn.addEventListener("click", () => {
    const operadorPresionado = btn.dataset.operator;

    agregarNumero(operadorPresionado);
    agregarPantalla();
  });
});
