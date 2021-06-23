var counter = 3;
function countdown() {
  if (counter === 3) {
    console.log('3');
    counter--;
  } else if (counter === 2) {
    console.log('2');
    counter--;
  } else if (counter === 1) {
    console.log('1');
    counter--;
  } else if (counter === 0) {
    console.log('Blast Off!');
    clearInterval(stop);
  }
}

var stop = setInterval(countdown, 1000);
