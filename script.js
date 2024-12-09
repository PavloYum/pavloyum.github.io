const bank = [];

// Debit card
// deposit: если вносимая сумма больше 5000 - действие не совершается
// withdraw: нельзя уходить в минус
const bankAccount = {
  accountNumber: "123456789",
  accountHolderName: "Alice",
  balance: 0,
  deposit(sum) {
    // TODO
    sum >= 5 && sum <= 5000
      ? (this.balance += sum)
      : alert("Вводимая сумма для пополнения баланса некорректная");
  },
  withdraw(sum) {
    // TODO
    sum <= this.balance && sum > 0
      ? this.balance -= sum
      : alert("Вводимая сумма для снятия баланса некорректная");
  },
  checkBalance() {
    alert(this.balance + "€");
  },
};

bankAccount.deposit(100);
console.log(bankAccount.balance);

bankAccount.withdraw(50);
console.log(bankAccount.balance);
