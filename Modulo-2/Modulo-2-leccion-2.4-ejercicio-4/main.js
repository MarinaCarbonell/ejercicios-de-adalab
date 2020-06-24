'use strict';

function isEven (number) {
  if (number % 2 == 0) {
    /*esto es una operacion modulo que devuelve el resto. Todos los números pares tienen resto de 0 al dividirlos entre 2. Aqui le decimos que a number le aplique el modulo 2*/
    return true;
  } else {
    return false;
  }
}

console.log (isEven (10));

/* VERSION PRO SIMPLIFICADA

function isEven (number) {
    return (number % 2 == 0);
}
console.log (isEven (10));

Esto es así porque la condicion en si misma ya es true */
