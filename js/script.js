// VARIABLES DOM
const display = document.querySelector("#output");
const btnEquals = document.querySelector("#equals");
const btnClear = document.querySelector("#clear");
const btnDelete = document.querySelector("#delete");
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

const agregarPantalla = () => {
  if (operacion) {
    display.value = `${operandoAnterior} ${operacion} ${operandoActual}`;
  } else {
    display.value = operandoActual;
  }
};

const elegirOperacion = (operador) => {
  if (!operandoActual) return;
  if (operandoAnterior !== false) {
    calcular();
  }
  operandoAnterior = operandoActual;
  operacion = operador;
  operandoActual = "";
};

const limpiar = () => {
  operandoActual = "0";
  operandoAnterior = "";
  operacion = undefined;
};

const parseNumbers = () => {
  const numAnterior = parseFloat(operandoAnterior);
  const numActual = parseFloat(operandoActual);
  return [numActual, numAnterior];
};

const calcular = () => {
  const [actual, anterior] = parseNumbers();
  let resultado = undefined;

  switch (operacion) {
    case "+":
      resultado = anterior + actual;
      break;

    case "-":
      resultado = anterior - actual;
      break;

    case "/":
      resultado = anterior / actual;
      break;

    case "*":
      resultado = anterior * actual;
      break;

    default:
      return;
  }

  operandoActual = resultado.toString();
  operandoAnterior = "";
  operacion = undefined;
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

    elegirOperacion(operadorPresionado);
    agregarPantalla();
  });
});

btnClear.addEventListener("click", () => {
  limpiar();
  agregarPantalla();
});

btnEquals.addEventListener("click", () => {
  calcular();
  agregarPantalla();
});

/*
RESOLVER A FUTURO:
1. Error logico - visual al presionar el operador borra el display y el user no tiene forma de ver que presiono
*/
