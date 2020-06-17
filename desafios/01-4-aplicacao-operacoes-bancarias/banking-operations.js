/* 
  Programa para realizar operações bancárias na conta de um usuário 
  Program to banking operations
*/

const user = {
  name: "Daury",
  transactions: [],
  balance: 0,
};

function updateBalance(type, value) {
  if (type === "credit") user.balance += value;
  else user.balance -= value;
}

function createTransaction(transaction) {
  user.transactions.push(transaction);
  updateBalance(transaction.type, transaction.value);
}

function getHigherTransactionByType(type) {
  let value = 0;
  let objHigherValue = {};
  for (let i = 0; i < user.transactions.length; i++) {
    if (user.transactions[i].type === type) {
      if (value < user.transactions[i].value) {
        value = user.transactions[i].value;
        objHigherValue = user.transactions[i];
      }
    }
  }
  console.log(objHigherValue);
}

function getAverageTransactionValue() {
  let sum = 0;
  let average = 0;
  for (transaction of user.transactions) {
    sum += transaction.value;
  }

  average = sum / user.transactions.length;
  console.log(average);
}

function getTransactionsCount() {
  let transactionsCount = {
    credit: 0,
    debit: 0,
  };
  for (transaction of user.transactions) {
    if (transaction.type === "credit") {
      transactionsCount.credit += 1;
    } else if (transaction.type === "debit") {
      transactionsCount.debit += 1;
    }
  }
  console.log(transactionsCount);
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "debit", value: 10 });
createTransaction({ type: "credit", value: 100 });
createTransaction({ type: "debit", value: 25 });
createTransaction({ type: "credit", value: 150 });
createTransaction({ type: "debit", value: 200 });
createTransaction({ type: "credit", value: 150 });

console.log(user.balance);

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount();
