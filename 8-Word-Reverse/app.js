function reverseText() {
  let word = String(document.getElementById("wordUser").value); //Capturamos la palabra que el usuario ingresa, usamos .value para capturar únicamente el valor ingresado

  if (word === "") {
    alert("Por favor ingresa una palabra");
  } else {
    let splitWord = word.split(""); // Dividimos la palabra ingresada por el usuario con la función split()

    let reverseWord = splitWord.reverse(); // Reversamos la palabra ingresada

    let wordReverse = reverseWord.join(""); // Juntamos la palabra ya reversada

    let wordResult = document.getElementById("wordResult");

    wordResult.innerHTML = wordReverse; // Mostramos el resultado de la palabra ya reversada
  }
}

function reset() {
  let wordInput = document.getElementById("wordUser");
  let resultCamp = document.getElementById("wordResult");

  resultCamp.innerHTML = "";
  wordInput.value = "";
}
