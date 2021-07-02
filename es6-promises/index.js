const takeAChance = require('./take-a-chance');
var testing = takeAChance('Michael');

testing.catch(error => {
  console.log(error.message);
});
testing.then(value => {
  console.log(value);
});
