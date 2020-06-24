/*EJEMPLOS DE FUNCIONES SIN RETURN*/

/*ejemplo de función con console log*/
function setText (selectText) {
  console.log ('Texto seleccionado:' + selectText);
  /*o*/
  console.log (`Texto seleccionado:'${selectText}`);
  /*esta segunda opción es más "elegante" que la primera, pero hay que tener ojo con las comillas porque son `, que nos podemos volver locas*/
}

setText (
  'Adalab mola'
); /*esto es un ejemplo de llamar a una función. "Adalab mola" es el valor que le damos al paŕametro selectText de la función. En la consola se pintaría "Texto seleccionado: Adalab mola"*/

/*ejemplo de función con const. Valdría también con let*/
function setConst (selectConst) {
  const printConst = selectConst; /*incluimos el parametro dentro de la constante*/
  console.log (
    printConst
  ); /*consoleamos la constante para ver el resultado en la consola*/
}

setConst (
  'Esta es la constante que seleccionada'
); /*aquí se imprimiría "Esta es la constante seleccionada"

/*ejemplo de función con condicional if...else*/

function setConditional (selectCondition) {
  if (selectCondition === 'Hola') {
    console.log ('que tal');
  } else {
    console.log ('ni saludas');
  }
}

setConditional (
  'Hola'
); /*se imprimiría 'que tal' en el caso de que el usuario escriba 'hola'*/

setConditional (
  'Nada'
); /*se imprimiría 'ni saludas' en el caso de que el usuario escriba algo distinto a 'hola'*/
