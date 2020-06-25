'use strict';

const adalaber1 = {
  name: 'Susana',
  age: 34,
  currentJob: 'periodista',
};

adalaber1.showBio = function () {
  return (
    'Mi nombre es' +
    this.name +
    'tengo' +
    this.age +
    'años y soy' +
    this.currentJob
  );
};

console.log (adalaber1.showBio ());

const result = document.querySelector ('.text');

result.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.currentJob}`;

const adalaber2 = {
  name: 'Rocio',
  age: 25,
  currentJob: 'actriz',
};

adalaber2.showBio = function () {
  return (
    'Mi nombre es' +
    this.name +
    'tengo' +
    this.age +
    'años y soy' +
    this.currentJob
  );
};

console.log (adalaber2.showBio ());

const result2 = document.querySelector ('.text2');

result2.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.currentJob}`;
