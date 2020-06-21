'use strict';

const mainH1 = 'Lorem Ipsum';
const mainImg = 'http://via.placeholder.com/350x150';
const mainPara = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit';
const mainDiv = document.querySelector ('.div');
/*mainDiv.innerHTML =
  '<h1>Lorem Ipsum</h1> <img src=http://via.placeholder.com/350x150> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>';*/

mainDiv.innerHTML =
  '<h1>' +
  mainH1 +
  '</h1>' +
  '<img src=' +
  mainImg +
  '></img>' +
  '<p>' +
  mainPara +
  '</p>';
