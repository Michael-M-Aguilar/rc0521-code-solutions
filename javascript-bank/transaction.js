/* exported Transaction */
function transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

transaction.prototype.returnValues = function () {
  return '(' + this.type + ' ' + this.amount + ')';
};
