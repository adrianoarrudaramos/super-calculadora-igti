var inputNumero1 = null;
var inputNumero2 = null;

var numero1 = null;
var numero2 = null;

window.addEventListener('load', start);

function start() {
  inputNumero1 = document.querySelector('#inputNumero1');
  inputNumero2 = document.querySelector('#inputNumero2');

  preventFormsubmit();
  activateInput();
}

function preventFormsubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Submit");

    numero1 = (inputNumero1.value == "" || isNaN(inputNumero1.value)) ? 0 : inputNumero1.value;
    numero2 = (inputNumero2.value == "" || isNaN(inputNumero2.value)) ? 0 : inputNumero2.value;
    console.log(numero1, numero2);

    if (Number.isInteger(Number(numero1))) {
      numero1 = parseInt(numero1);
    } else {
      numero1 = parseFloat(numero1);
    }

    if (Number.isInteger(Number(inputNumero2))) {
      numero2 = parseInt(numero2);
    } else {
      numero2 = parseFloat(numero2);
    }

    //Soma A + B
    var resultadoSoma = document.querySelector('#resultadoSoma');
    resultadoSoma.textContent = soma(numero1, numero2);

    // Subtração A - B
    var resultadoSub1 = document.querySelector('#resultadoSub1');
    resultadoSub1.textContent = subtracao(numero1, numero2);

    // Subtração B - A
    var resultadoSub2 = document.querySelector('#resultadoSub2');
    resultadoSub2.textContent = subtracao(numero2, numero1);

    // Multiplicação A * B
    var resultadoMultiplicacao = document.querySelector('#resultadoMultiplicacao');
    resultadoMultiplicacao.textContent = multiplicacao(numero1, numero2);

    // Divisão A / B
    var resultadoDiv1 = document.querySelector('#resultadoDiv1');
    resultadoDiv1.textContent = divisao(numero1, numero2);

    // Divisão B / A
    var resultadoDiv2 = document.querySelector('#resultadoDiv2');
    resultadoDiv2.textContent = divisao(numero2, numero1);

    // Quadrado de A
    var resultadoQuadradoA = document.querySelector('#resultadoQuadradoA');
    resultadoQuadradoA.textContent = quadrado(numero1);

    // Quadrado de B
    var resultadoQuadradoB = document.querySelector('#resultadoQuadradoB');
    resultadoQuadradoB.textContent = quadrado(numero2);

    // Divisores inteiros de A
    var resultadoDivIntA = document.querySelector('#resultadoDivIntA');
    resultadoDivIntA.textContent = divisoresInteiros(numero1);

    // Divisores Inteiros de B
    var resultadoDivIntB = document.querySelector('#resultadoDivIntB');
    resultadoDivIntB.textContent = divisoresInteiros(numero2);

    // Fatorial de A
    var resultadoFatA = document.querySelector('#resultadoFatA');
    resultadoFatA.textContent = fatorial(numero1);

    // Fatorial de B
    var resultadoFatB = document.querySelector('#resultadoFatB');
    resultadoFatB.textContent = fatorial(numero2);

  }

  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);

}

function activateInput() {
  inputNumero1.focus();
}

function soma(a=0, b=0) {
  return formatNumber((a + b).toFixed(2));
}

function subtracao(a=0, b=0) {
  return formatNumber((a - b).toFixed(2));
}

function multiplicacao(a = 0, b = 0) {
  return formatNumber((a * b).toFixed(2));
}

function divisao(a = 0, b = 1) {
  if (b != 0) {
    return formatNumber((a / b).toFixed(2));
  } else {
    return "Divisão por zero!"
  }
}

function quadrado(a = 0) {
  return formatNumber((a * a).toFixed(2));
}

function divisoresInteiros(a) {
  var aux = [];
  var resultado = "";

  for(var i=1; i <= a; i++) {
    if(a % i === 0) {
      aux.push(i);
    }
  }

  if (aux.length > 0) {
    return (aux.join() + " (" + aux.length + ")").toString();
  }
  return "Nenhum";
}

function fatorial(a) {
  var resultado = 1;

  for(var i = a; i >= 1; i--) {
    resultado *= i;
  }

  return resultado;
}

function formatNumber(number) {
  return new Intl.NumberFormat('pt-BR').format(number);
}