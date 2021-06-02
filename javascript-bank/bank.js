/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
  return (nextAccountNumber, accounts);
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance < 0 && Number.isInteger(balance)) {
    return null;
  }
};

Bank.prototype.getAccount = function () {};

Bank.prototype.getTotalAssets = function () {};

// if (this.balance > 0) {
//   Math.abs(this.balance);
// }
