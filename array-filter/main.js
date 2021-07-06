const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(numbers => numbers % 2 === 0);
console.log('Even Numbers: ', evenNumbers);
const orderFive = numbers.filter(numbers => numbers > 5);
console.log('Numbers that are greater than five: ', orderFive);

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];
const startWithE = names.filter(startWithE => startWithE[0] === 'E');
console.log('The words that start with E: ', startWithE);

const haveD = names.filter(name => name.includes('D') || name.includes('d'));
console.log('Names that start with D or d: ', haveD);
