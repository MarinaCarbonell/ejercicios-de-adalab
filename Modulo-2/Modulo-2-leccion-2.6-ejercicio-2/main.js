'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  currentJob: 'periodista',
  run: () => console.log ('Estoy corriendo'),
};

adalaber1.runAMarathon = distance => `Estoy corriendo un maratón ${distance}`;

const result = document.querySelector ('.text');

result.innerHTML =
  `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.currentJob}` +
  adalaber1.runAMarathon (50);

const adalaber2 = {
  name: 'Rocio',
  age: 25,
  currentJob: 'actriz',
};

const result2 = document.querySelector ('.text2');

result2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.currentJob}`;
