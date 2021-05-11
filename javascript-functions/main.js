function convertMinutesToSeconds(minutes) {
  return 60 * minutes;
}
console.log('The value of convertMinutesToSeconds is: ' + convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}
console.log('The value of greet is: ' + greet('Beavis'));

function getArea(width, height) {
  return width * height;
}
console.log('The value of getArea is: ' + getArea(17, 42));

function getFirstName(person) {
  return { person };
}
console.log('The value of getFirstName is: ', getFirstName('Lelouche'));

function getLastElement(array) {
  var lastIndex = array.length - 1;
  return array[lastIndex];
}
console.log('The value of getLastElement is: ' + getLastElement(['propane', 'and', 'propane', 'accessories']));
