let timeUp;
let timeInterval;

function startTime() {
  timeUp = setTimeout(timeCompleted, 1000 * 61);
  timeInterval = setInterval(time, 1000);

  document.getElementById("contador").textContent = 60;
}

function time() {
  let time = document.getElementById("contador").textContent;

  document.getElementById("contador").textContent = time - 1;
}

function timeCompleted() {
  clearInterval(timeInterval);
  document.getElementById("contador").textContent = 0;
  document.getElementById("sound").play();
  alert("Se ha terminado el tiempo");
}

function send() {
  clearTimeout(timeUp);
  clearInterval(timeInterval);
  let date = new Date();
  let answer1 = document.getElementById("answer1").value;
  let answer2 = document.getElementById("answer2").value;
  let answer3 = document.getElementById("answer3").value;
  let answer4 = document.getElementById("answer4").value;
  let answer5 = document.getElementById("answer5").value;

  let message =
    "Fecha" +
    " " +
    date.toLocaleDateString("es-Es") +
    `

  1- ${answer1}
  2- ${answer2}
  3- ${answer3}
  4- ${answer4}
  5- ${answer5}
  `;

  alert(message);

  document.getElementById("answer1").value = "";
  document.getElementById("answer2").value = "";
  document.getElementById("answer3").value = "";
  document.getElementById("answer4").value = "";
  document.getElementById("answer5").value = "";
}

function reset() {
  let form = document.getElementById("form");
  location.reload();
  form.reset();
}
