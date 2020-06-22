const superWave = document.querySelector ('.super-wave');
console.log (superWave);
superWave.innerHTML = 'coche';
console.log ('innerHtml = ' + superWave.innerHTML);
console.log ('classList = ' + superWave.classList);

const title = document.querySelector ('#title');
title.innerHTML = 'adios';
title.classList.add ('super-wave__color');
