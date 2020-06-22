'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
//userAvatar = ''; aquí le damos un nuevo valor a la variable. La dejamos vacía

const userImg = document.querySelector ('.user__avatar');
console.log (userImg);

userImg.src = userAvatar;
console.log (userImg);

//userImg.src = userAvatar || DEFAULT_AVATAR;

console.log (userImg);

if (userAvatar) {
  //un string que no tiene valor por defecto es false. en este caso al no poner nada, lo está cogiendo como false
  userImg.src = userAvatar;
} else {
  userImg.src = DEFAULT_AVATAR;
}

console.log (userAvatar);

//también se puede poner
if (userAvatar == '') {
  //en este caso le decimos si userAvatar es igual a nada
  userImg.src = DEFAULT_AVATAR;
} else {
  userImg.src = userAvatar;
}

if (userAvatar != '') {
  //en este caso le decimos si userAvatar es diferente a nada
  userImg.src = userAvatar;
} else {
  userImg.src = DEFAULT_AVATAR;
}
