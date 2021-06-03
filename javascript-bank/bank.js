/* exported Bank */
function Bank(nextAccountNumber, accounts) {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var openAccount = new Account(this.nextAccountNumber, holder);
    openAccount.deposit(balance);
    this.accounts.push(openAccount);
    this.nextAccountNumber++;
    return openAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var totalBalance = 0;
  if (this.accounts.length > 0) {
    for (var i = 0; i < this.accounts.length; i++) {
      totalBalance += this.accounts[i].getBalance();
    }
    return totalBalance;
  }
  return 0;
};
