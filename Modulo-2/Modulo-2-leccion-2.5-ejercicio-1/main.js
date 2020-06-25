const button = document.querySelector ('.button');
const parragrpah = document.querySelector ('.parragraph');

button.addEventListener ('click', clickButton);

function clickButton (ev) {
  parragrpah.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}
