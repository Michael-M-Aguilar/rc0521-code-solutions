var $form = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var formName = $form.name.value;
  var formEmail = $form.email.value;
  var formMessage = $form.message.value;
  var formData = {
    name: formName,
    email: formEmail,
    message: formMessage
  };
  console.log('formData: ', formData);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
