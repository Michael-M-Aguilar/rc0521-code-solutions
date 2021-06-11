// List of querySelctors for event listening
var $rotation = document.querySelector('.rotation');
var $allCircles = document.querySelectorAll('.fa-circle');
var $rightArrow = document.querySelector('.fa-arrow-right');
var $leftArrow = document.querySelector('.fa-arrow-left');
var $selectAll = document.querySelector('.selectAll');

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
// function to scroll left, change the image, and also update the circle.
function scrollLeft() {
  // once it hits the last image, reset
  if (counter === 0) {
    counter = 5;
  }
  counter--;
  // Decrement after checking if counter is 0, otherwise will break.

  // When the counter reaches a certain number, it will set the new image class equal to that src/alt values.
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);

  // Updates the circle to be up to date to the current image.
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

// function to scroll right, change the image, and update the circle.
function scrollRight() {
  counter++;
  // once it hits the last image, reset
  if (counter === 5) {
    counter = 0;
  }
  // When the counter reaches a certain number, it will set the new image class equal to that src/alt values.
  $rotation.setAttribute('src', images[counter].src);
  $rotation.setAttribute('alt', images[counter].alt);

  // Updates the circle to be up to date to the current image.
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

setInterval(scrollRight, 3000);

// An event listener when you scroll right.
$rightArrow.addEventListener('click', function (event) {
  scrollRight();
});

$selectAll.addEventListener('click', function (event) {
  for (var i = 0; i < $allCircles.length; i++) {
    if (event.target === $allCircles[i]) {
      counter = i;
      $rotation.setAttribute('src', images[i].src);
      $rotation.setAttribute('alt', images[i].alt);
      $allCircles[i].className = 'fas fa-circle';
    } else {
      $allCircles[i].className = 'far fa-circle';
    }
  }
});
