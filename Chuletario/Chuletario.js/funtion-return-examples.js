/***EJEMPLOS DE FUNCIONES CON RETURN* la diferencia entre estas y las funciones sin return es que si lo ponemos, el valor que ponemos después de return se devuelve al acabar la ejecución de la función. Lo podemos usar para variables y constantes**/

/*ejemplo de función con console log*/
function sumConsole (a, b) {
  const result = a + b;
  console.log (result);
  return result;
}
result (2 + 3);
/*aqui es donde damos el valor a lo parametros. El resultado que vamos a ver al consolear es 5*/

/*ejemplo de función con const, aunque también vale para let*/

function sumConst (a, b) {
  const makeASum = a + b; /*indicamos lo que queremos hacer con los parametros*/
  return makeASum; /*indicamos que nos devuelva el resultado de la operacion que hemos indicado en la constante*/
}

/*declaramos una const nueva llamando a la funcion (sumConst) e indicando los valores de los parámetros (3 y 2). Va a tener como resultado el valor que se indica en el return*/
const sumMade = sumConst (3, 2);

/*ejemplo de función con condicional if...else*/

function setCond (selectCond) {
  let result; /*hemos creado la variable para poder usarla en la condición y asignarla un valor dependiendo de la condición*/
  if (selectCond === 'Hola') {
    result = 'que tal';
  } else {
    result = 'ni saludas';
  }
  return result;
}

const printResult = setCond (
  'no pongo nada'
); /*esta constante tendrá ni 'ni saludas'*/

const printResult = setCond ('Hola'); /*esta constante tendrá ni 'que tal'*/
