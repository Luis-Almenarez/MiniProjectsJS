let main = document.getElementById("main");
main.classList.add("flex", "flex-col", "justify-center", "items-center", "gap-10");

function chargeSite() {
  let sectionButtons = `
<section class="mt-16 flex gap-5">
<button id="boton1" onclick="AddBorderAndBg()" class="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200">Botón 1</button>
<button id="boton2" onclick="hiddenImg()" class="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200">Botón 2</button>
<button id="boton3" onclick="reset()" class="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-200">Botón 3</button>
</section>
`;

  let sectionImg = `
<section id="imgJS">
    <img id="image" src="./javascript_icon.png" alt="Logo JavaScript">
</section>
`;

  main.innerHTML = sectionButtons;
  main.innerHTML += sectionImg;
}

function AddBorderAndBg() {
  let img = document.getElementById("imgJS");
  let btn1 = document.getElementById("boton1");

  btn1.classList.add("hidden");

  img.classList.add("w-44", "h-44", "flex", "justify-center", "items-center", "bg-blue-600", "rounded-full", "rotate-12");
}

function hiddenImg() {
  let button = document.getElementById("boton2");
  let img = document.getElementById("image");
  let sectionImg = document.getElementById("imgJS");

  img.classList.toggle("hidden");
  sectionImg.classList.toggle("hidden");
}

function reset() {
  let sectionImg = document.getElementById("imgJS");
  let img = document.getElementById("image");
  let btn = document.getElementById("boton1");

  btn.classList.remove("hidden");
  img.classList.remove("hidden");
  sectionImg.classList.remove("hidden", "w-44", "h-44", "flex", "justify-center", "items-center", "bg-blue-600", "rounded-full", "rotate-12");
}
