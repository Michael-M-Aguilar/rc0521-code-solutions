var $rotation = document.querySelector('.rotation');
var $allCircles = document.getElementsByClassName('fa-circle');
var $rightArrow = document.querySelector('.fa-arrow-right');
var $leftArrow = document.querySelector('.fa-arrow-left');
// Have an array of objects to access later as a carousel?
var images = [
  {
    src: 'images/001.png',
    alt: 'Bulbasaur'
  },
  {
    src: 'images/004.png',
    alt: 'Charmander'
  },
  {
    src: 'images/007.png',
    alt: 'Squirtle'
  },
  {
    src: 'images/025.png',
    alt: 'Pikachu'
  },
  {
    src: 'images/039.png',
    alt: 'Jigglypuff'
  }
];
// set a counter, where if it reaches a number, a certain image will show up?
var counter = 0;

function scrollRight() {
  counter++;
  // once it hits the last image, reset
  if (counter === 5) {
    counter = 0;
  }
  // When the counter reaches a certain number, it will set the new image class equal to that src/alt values.
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);
  // console.log($allCircles[i]);
  // console.log(images[counter]);
  // how to change the circles to be the dark filled in ones?
  for (var i = 0; i < $allCircles.length; i++) {
    if ($allCircles[i].className !== 'far fa-circle') {
      $allCircles.className = 'far fa-circle';
      $allCircles[i].className = 'fas fa-circle';
    } else {
      $allCircles.className = 'far fa-circle';
      $allCircles[i].className = 'fas fa-circle';
    }
  }

  // for (var i = 0; i < $allCircles.length; i++) {
  //   if ($allCircles[i] === images[counter].src) {
  //     $allCircles[i].className = 'fas fa-circle';
  //   } else {
  //     $allCircles[i].className = 'far fa-circle';
  //   }
  // }
}
// An event listener when you scroll right.
$rightArrow.addEventListener('click', function (event) {
  scrollRight();
});

// Uses previous counter var. Will help scroll left in the arrows.
function scrollLeft() {
  counter--;
  if (counter === 0) {
    counter = 5;
  }
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);
}
// An event listener when you scroll left.
$leftArrow.addEventListener('click', function (event) {
  scrollLeft();
});
