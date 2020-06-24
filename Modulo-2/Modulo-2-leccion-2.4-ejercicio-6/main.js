'use strict';

function getEl (selector) {
  const htmlLabel = document.querySelector (selector);
  if (htmlLabel == null) {
    console.log (
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return htmlLabel;
}
