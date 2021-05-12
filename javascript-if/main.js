/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
// 1
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
// 2
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// 3
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
// 4
function isOldEnoughToDrink(person) {
  if (person.age > 21) {
    return true;
  } else {
    return false;
  }
}
// 5
function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}
// 6
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 21) {
    return false;
  } else {
    return false;
  }
}
// 7
function categorizeAcidity(pH) {
  if (pH > 14 || pH < 0) {
    return 'invalid pH level';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7) {
    return 'base';
  } else {
    return 'acid';
  }
}
// 8
function introduceWarnerBro(name) {
  if (name === 'dot') {
    return "I'm Cute~";
  } else if (name === 'wakko' || name === 'yakko') {
    return "We're the warner brothers!";
  } else {
    return 'Goodnight everybody!';
  }
}
