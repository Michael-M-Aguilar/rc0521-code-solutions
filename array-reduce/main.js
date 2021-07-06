const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
const sum = numbers.reduce(reducer);
console.log('The values of sum: ', sum);

const multiplier = (accumulator, currentValue) => accumulator * currentValue;
const product = numbers.reduce(multiplier);
console.log('The sum of the multiplied numbers: ', product);

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const balancer = (accumulator, currentValue) => {
  if (currentValue.type === 'deposit') {
    return accumulator + currentValue.amount;
  } else {
    return accumulator - currentValue.amount;
  }
};
const balance = account.reduce(balancer, 0);
console.log('Value of balances: ', balance);

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const trait = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
const composite = traits.reduce(trait);
console.log('Value of the composite: ', composite);
