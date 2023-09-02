function saludo() {
  let nombre = document.getElementById("input");
  let value = nombre.value;

  if (value === "") {
    alert("Ingresa un valor válido");
  } else {
    let saludo = `<h1>Hola! ${value} cómo estás</h1>`;

    let result = document.getElementById("result");

    result.innerHTML = saludo;
  }

  nombre.value = "";
}
