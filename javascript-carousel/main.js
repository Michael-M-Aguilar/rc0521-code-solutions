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

function scrollLeft() {
  if (counter === 0) {
    counter = 5;
  }
  counter--;
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);

  if ($allCircles[4].className === 'fas fa-circle') {
    $allCircles[4].className = 'far fa-circle';
    $allCircles[3].className = 'fas fa-circle';
  } else if ($allCircles[3].className === 'fas fa-circle') {
    $allCircles[3].className = 'far fa-circle';
    $allCircles[2].className = 'fas fa-circle';
  } else if ($allCircles[2].className === 'fas fa-circle') {
    $allCircles[2].className = 'far fa-circle';
    $allCircles[1].className = 'fas fa-circle';
  } else if ($allCircles[1].className === 'fas fa-circle') {
    $allCircles[1].className = 'far fa-circle';
    $allCircles[0].className = 'fas fa-circle';
  } else if ($allCircles[0].className === 'fas fa-circle') {
    $allCircles[0].className = 'far fa-circle';
    $allCircles[4].className = 'fas fa-circle';
  }
}
// An event listener when you scroll left.
$leftArrow.addEventListener('click', function (event) {
  scrollLeft();
});

function scrollRight() {
  counter++;
  // once it hits the last image, reset
  if (counter === 5) {
    counter = 0;
  }
  // When the counter reaches a certain number, it will set the new image class equal to that src/alt values.
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);

  if ($allCircles[0].className === 'fas fa-circle') {
    $allCircles[0].className = 'far fa-circle';
    $allCircles[1].className = 'fas fa-circle';
  } else if ($allCircles[1].className === 'fas fa-circle') {
    $allCircles[1].className = 'far fa-circle';
    $allCircles[2].className = 'fas fa-circle';
  } else if ($allCircles[2].className === 'fas fa-circle') {
    $allCircles[2].className = 'far fa-circle';
    $allCircles[3].className = 'fas fa-circle';
  } else if ($allCircles[3].className === 'fas fa-circle') {
    $allCircles[3].className = 'far fa-circle';
    $allCircles[4].className = 'fas fa-circle';
  } else if ($allCircles[4].className === 'fas fa-circle') {
    $allCircles[4].className = 'far fa-circle';
    $allCircles[0].className = 'fas fa-circle';
  }
}

// An event listener when you scroll right.
$rightArrow.addEventListener('click', function (event) {
  scrollRight();
});

// Uses previous counter var. Will help scroll left in the arrows.
