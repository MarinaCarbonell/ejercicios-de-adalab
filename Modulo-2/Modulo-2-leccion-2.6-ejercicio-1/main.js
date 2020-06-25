'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  currentJob: 'periodista',
};
const result = document.querySelector ('.text');

/*tenemos que crear la constante para guardar el elemento html que queremos modificar con el inner.html*/

result.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.currentJob}`;

const adalaber2 = {
  name: 'Rocio',
  age: 25,
  currentJob: 'actriz',
};

const result2 = document.querySelector ('.text2');

result2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.currentJob}`;

/*así cambiamos el contenido de una propiedad*/

adalaber1.name = 'Marina';
result.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.currentJob}`;
