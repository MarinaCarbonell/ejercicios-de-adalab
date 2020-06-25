const name = document.querySelector ('.input');
const button = document.querySelector ('.button');

button.addEventListener ('click', clickButton);

/*function clickButton (ev) {
  const resultClick = `Hola ${name.value}`;
  console.log (resultClick);
}*/

function clickButton (ev) {
  console.log (`Hola ${name.value}`);
}
