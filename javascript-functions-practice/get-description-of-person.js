/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var descriptionPerson = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return descriptionPerson;
}
