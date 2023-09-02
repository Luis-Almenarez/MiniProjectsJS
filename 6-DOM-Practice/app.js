function saludo() {
  let text = document.getElementById("div");

  let hello = `<p class="text-3xl text-center font-bold text-white"> Hola mundo </p>`;

  text.innerHTML = hello;
}

function createImage() {
  let div = document.getElementById("div");

  let imagen = ' <img src="./html.png" /> ';

  div.innerHTML = imagen;
}

function agregarElemento() {
  let div = document.getElementById("div");
  let button = "<button class='px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200' > Botón </button>";

  div.innerHTML += button;
}

function reset() {
  let div = document.getElementById("div");

  div.innerHTML = " ";
}
