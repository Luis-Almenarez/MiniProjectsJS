for (numero = 1; numero <= 100; numero++) {
  if (numero % 3 === 0 && numero % 5 === 0) {
    console.log(numero + " FizzBuzz");
  } else if (numero % 3 === 0) {
    console.log(numero + " Fizz");
  } else if (numero % 5 === 0) {
    console.log(numero + " Buzz");
  }
}
