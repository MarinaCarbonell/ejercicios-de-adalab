'use strict';

function media (a, b, c, d) {
  return (a + b + c + d) / 4;
}

console.log (media (2, 4, 6, 8));
console.log (media (1, 3, 6, 9));
console.log (media (10, 10, 20, 20));

//en este caso no hay que volver a poner la division de 4 en el console log ya que la operacion la indicamos en el return
