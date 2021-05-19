var clicker = 0;
var $openButton = document.querySelector('#theButton');
var $modal = document.querySelector('.modalOff');
var $modalContainer = document.querySelector('.modalContainerBkgOff');

$openButton.addEventListener('click', function (event) {
  clicker++;
  var modalUp;
  var background;
  if (clicker % 2 !== 0) {
    modalUp = 'modalContainerOn';
    background = 'modalContainerBkgOn';
  }
  $modal.className = modalUp;
  $modalContainer.className = background;
});

var clicks = 0;
var $noButton = document.querySelector('.noButton');
var $modalOff = document.querySelector('.modalOff');
var $modalContainerOff = document.querySelector('.modalContainerBkgOff');
$noButton.addEventListener('click', function (event) {
  clicks++;
  var modalDown;
  var backgroundDown;
  if (clicks % 2 !== 0) {
    modalDown = 'modalOff';
    backgroundDown = 'modalContainerBkgOff';
  }

  $modalOff.className = modalDown;
  $modalContainerOff.className = backgroundDown;
});
