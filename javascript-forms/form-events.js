function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}
function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}
function handleInput(event) {
  console.log('value of ' + event.target.name + ':' + event.target.value);
}

var $userNameFocus = document.getElementById('user-name');
$userNameFocus.addEventListener('focus', handleFocus);

var $emailFocus = document.getElementById('user-email');
$emailFocus.addEventListener('focus', handleFocus);

var $userMessageFocus = document.getElementById('user-message');
$userMessageFocus.addEventListener('focus', handleFocus);

var $userNameBlur = document.getElementById('user-name');
$userNameBlur.addEventListener('blur', handleBlur);

var $userEmailBlur = document.getElementById('user-email');
$userEmailBlur.addEventListener('blur', handleBlur);

var $userMessageBlur = document.getElementById('user-message');
$userMessageBlur.addEventListener('blur', handleBlur);

var $inputs = document.getElementById('contact-form');
$inputs.addEventListener('input', handleInput);
