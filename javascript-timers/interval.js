var $titleChange = document.querySelector('h1');

function trial() {
  if ($titleChange.textContent === '4') {
    $titleChange.textContent = '3';
  } else if ($titleChange.textContent === '3') {
    $titleChange.textContent = '2';
  } else if ($titleChange.textContent === '2') {
    $titleChange.textContent = '1';
  } else if ($titleChange.textContent === '1') {
    $titleChange.textContent = 'SUPRISE!';
    clearInterval(test);
  }
}

var test = setInterval(trial, 700);
