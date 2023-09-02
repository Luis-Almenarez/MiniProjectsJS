function startTime() {
  setInterval(start, 1000);
}

function start() {
  const time = new Date();
  const hour = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");

  const reloj = document.getElementById("reloj");

  const textReloj = hour + ":" + minutes + ":" + seconds;

  reloj.textContent = textReloj;
}
