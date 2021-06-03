/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newDeposit = new Transaction('deposit', amount);
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};
Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newWithdaw = new Transaction('withdrawal', amount);
    this.transactions.push(newWithdaw);
    return true;
  } else {
    return false;
  }
};
Account.prototype.getBalance = function () {
  var totalBalance = 0;
  if (this.transactions.length === 0) {
    return 0;
  }
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      totalBalance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      totalBalance -= this.transactions[i].amount;
    }
  }
  return totalBalance;
};
