// function send() {
//   let edad = document.getElementById("edad").value;
//   let campoTexto = document.getElementById("result");

//   if (edad >= 18) {
//     campoTexto.innerHTML = "Felicidades, puedes conducir";
//   } else if (edad < 18) {
//     campoTexto.innerHTML = "Lo sentimos, no puedes conducir";
//   }
// }

// Tabla de multiplicar con bucle FOR

function send() {
  let number = document.getElementById("number").value;
  let campoTexto = document.getElementById("result");
  let table = "";
  if (number === "") {
    alert("Ingresa un valor válido");
  } else {
    for (i = 1; i <= 10; i++) {
      let result = number * i;
      table += `<p>${number} X ${i} = ${result}</p>`;
      campoTexto.innerHTML = table;
    }
  }
}

function reset() {
  let number = document.getElementById("number");
  let campoTexto = document.getElementById("result");

  campoTexto.innerHTML = "";
  number.value = "";
}
