var $taskList = document.querySelector('.task-list');

function logging(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    event.target.closest('.task-list-item').remove();
  }
}

$taskList.addEventListener('click', logging);
