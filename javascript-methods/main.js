var first = 21;
var second = 30;
var third = 5;
var maximumValue = Math.max(first, second, third);
console.log('The maximumValue is: ' + maximumValue);

var heroes = ['Ironman', 'Batman', 'Supermax', 'Captain America'];
var randomNumber = (Math.random() * heroes.length);
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex is: ' + randomIndex);
console.log('The randomHero logged is: ' + heroes[randomIndex]);

var library = [
  {
    title: 'The Count of Monte Cristo',
    author: 'Alexandre Dumas'
  },
  {
    title: 'Frankenstein',
    author: 'Mary Shelley'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger'
  }
];

var lastBook = library.pop();
console.log('The last book is: ', lastBook);
var firstBook = library.shift();
console.log('The first book is: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

var fullName = 'Michael Aguilar';
var firstAndLastName = fullName.split(' ');
console.log('The value of firstAndLastName: ' + firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('The value of sayMyName is: ' + sayMyName);
