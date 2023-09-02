let button = document.getElementById("button1");

function time() {
  setTimeout(timeUp, 1000 * 2);
}

function timeUp() {
  let parrafo = document.getElementById("parrafo");

  parrafo.innerHTML = "Se terminó el tiempo";

  button.classList.remove("hidden");
}

function reset() {
  let parrafo = document.getElementById("parrafo");

  parrafo.innerHTML = "";

  button.classList.add("hidden");
}
