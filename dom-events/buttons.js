function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
var clickOnce = document.querySelector('.click-button');
clickOnce.addEventListener('click', handleClick);
// 'click' - click once
// 'dblclick'

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
var hoverOver = document.querySelector('.hover-button');
hoverOver.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var clickTwice = document.querySelector('.double-click-button');
clickTwice.addEventListener('dblclick', handleDoubleClick);
