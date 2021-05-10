var student = {
  firstName: 'Michael',
  lastName: 'Aguilar',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:' + fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Quality Control';
console.log('value of student.livesInIrvine: ' + student.livesInIrvine);
console.log('value of student.previousOccupation: ' + student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: '2012'
};
vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]: ' + vehicle['color']);
console.log('value of vehicle["isConvertible"]: ' + vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

var pet = {
  name: 'Luna',
  type: 'Dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
