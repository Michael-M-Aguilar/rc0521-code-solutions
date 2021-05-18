var clicking = 0;
var $circleClicker = document.querySelector('.circleOff');
var $containerClicker = document.querySelector('.containerOff');

$circleClicker.addEventListener('click', function (event) {
  clicking++;
  var color;
  if (clicking % 2 !== 0) {
    color = 'On';
  } if (clicking % 2 === 0) {
    color = 'Off';
  }
  $circleClicker.className = 'circle' + color;
  $containerClicker.className = 'container' + color;
});
