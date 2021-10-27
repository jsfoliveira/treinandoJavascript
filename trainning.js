function insert(num) {
  var numero = window.document.getElementById("resultado").innerHTML;
  window.document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  window.document.getElementById("resultado").innerHTML = "";
}

function back() {
  var resultado = window.document.getElementById("resultado").innerHTML;
  window.document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  var resultado = window.document.getElementById("resultado").innerHTML;
  if (resultado) {
    window.document.getElementById("resultado").innerHTML = eval(resultado);
  }
}
//aqui começa o código da segunda calculadora
function calculation() {
  var a = parseInt(window.document.querySelector("input#value1").value);
  //parseInt converte  string para números inteiros
  var b = parseInt(window.document.querySelector("input#value2").value);
  var selectOperation = window.document.querySelector(
    'input[name="operation"]:checked'
  ).value;
  //eu só quero pegar o "name=operation" que esteja clicado
  var nameOperation, calculo;
  if (selectOperation == "adicao") {
    nameOperation = "Adição";
    calculo = a + b;
  }
  if (selectOperation == "subtracao") {
    nameOperation = "Subtração";
    calculo = a - b;
  }
  if (selectOperation == "multiplicacao") {
    nameOperation = "Multiplicação";
    calculo = a * b;
  }
  if (selectOperation == "divisao") {
    nameOperation = "Divisão";
    calculo = a / b;
  }
  alert(nameOperation + ":" + calculo);
}
