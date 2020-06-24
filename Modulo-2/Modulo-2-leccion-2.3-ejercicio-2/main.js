'use strict';

let name = 'Marina';
let hello;

if (name == 'Marina') {
  hello = `Bienvenida, ${name}`;
} else {
  hello = 'Lo siento pero el usuario que has introducido no está registrado.';
}

const result = document.querySelector ('.result');

result.innerHTML = hello;
