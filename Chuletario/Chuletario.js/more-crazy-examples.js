'use strict';

function crazyFunction (selector, number) {
  const resultNumber = number + 100;
  const resultSelector = document.querySelector (selector);
  resultSelector.innerHTML = resultNumber;
  return resultNumber;
}

const finalResult = crazyFunction ('.htmltag', 100);
console.log (finalResult);
