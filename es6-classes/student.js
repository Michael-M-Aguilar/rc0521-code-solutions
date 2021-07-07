/* exported Student */

// function Student(firstName, lastName, subject) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.subject = subject;
// }

// Student.prototype.getFullName = function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// };

// Student.prototype.getIntroduction = function () {
//   const { subject } = this;
//   const fullName = this.getFullName();
//   return `Hello, my name is ${fullName} and I am studying ${subject}.`;
// };

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getIntroduction() {
    this.fullName = this.firstName + ' ' + this.lastName;
    return 'Hello, my name is ' + this.fullName + ' and I am studying ' + this.subject + '.';
  }
}
