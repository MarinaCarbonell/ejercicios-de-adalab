document.querySelector; /*sirve para seleccionar un elemento html usando como selector una clase, id o etiqueta de html, por ejemplo: document.queryselector(.htmlClass)*/

etiqueta.innerHTML; /*para llamar al contenido html de la eiqueta que le indiquemos delante de él*/

/*ejemplo de las dos anteriores*/

const printConst = documen.queryselector ('.htmlClass');
/*el htmlClass va entre comillas porque es un texto*/
printConst.innerHTML = 'Este es el resultado del ejemplo';
/* lo que va a pasar es que se va a pintar "Este es el resultado del ejemplo" en la parte del html a la que pertenece la class .htmlClass*/

console.log (); /*esto nos sirve para pintar en la consola lo que pongamos dentro del paréntesis. Es muy útil para ver si las cosas funcionan o no o para ver resultados*/

/*ESTRUCTURA BÁSICA EXPLICADA DE UNA FUNCIÓN*/

/*aquí declaramos la función*/

function nombreDelaFuncion (parametros) {
  cuerpodelafunción;
}

/*aquí llamamos a la función*/

nombreDelaFuncion (argumentos);

/*expliación de cada uno de los elementos anteriores*/

nombreDelaFuncion = 'solo lo usamos al declararla y al llamarla';
parametros =
  'valores que recibe la función, con los que luego va a hacer cosas';
cuerpodelafunción = 'conjunto de código donde hago el algoritmo de la función';
argumentos = 'valores concretos que le pasas a la función al llamarla';
