const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

const first = Number(process.argv[2]);
const second = Number(process.argv[4]);
const filler = process.argv[3];

if (filler === 'plus') {
  console.log('result: ', (add(first, second)));
} else if (filler === 'minus') {
  console.log('result :', (subtract(first, second)));
} else if (filler === 'times') {
  console.log('result :', multiply(first, second));
} else if (filler === 'over') {
  console.log('result: ', (divide(first, second)));
}
