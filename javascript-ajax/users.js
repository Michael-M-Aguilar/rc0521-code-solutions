var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  for (var users of xhr.response) {
    var usersName = document.createElement('li');
    usersName.textContent = users.name;
    $userList.appendChild(usersName);
  }
});
xhr.send();
