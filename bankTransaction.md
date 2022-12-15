
const Transaction = { 
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
}

const account = {
  startId: 0,
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    return {
      amount,
      type,
      id: this.generateId(),
    }
  },
  generateId() {
    return account.startId += 1
  },
  deposit(amount) {
    account.transactions.push(account.createTransaction(amount, Transaction.DEPOSIT));
    this.balance += amount;
  },
  withdraw(amount) {
    if (account.balance >= amount) {
      account.transactions.push(account.createTransaction(amount, Transaction.WITHDRAW));
      account.balance -= amount;
    } else {
      console.log("Not enough", account.balance );
    }
  },
}

console.log(account)
account.deposit(5000)
console.log(account)
account.withdraw(1000)
console.log(account);
account.withdraw(4500)
console.log(account);



____________________________________


const account = {
  
  balance: 0,
  transactions: [],
  createTransaction() {
    
  },
  generateId() {
   
  },
  deposit() {
   
  },
  withdraw() {
    
  },
  getTransactions() {
    
  }
}

________________________________-
const operation = {
  DEPOSIT: "depo",
  WITHDRAW: "withdr",
}

const account = {
  id: 0,
  balance: 0,
  transactions: [],
  createTransaction(operation, amount) {
    this.generateId();
    this.transactions.push({amount, operation, id: account.id})
  },
  generateId() {
    this.id += 1;
  },
  deposit(amount) {
    
    this.createTransaction(operation.DEPOSIT, amount);
    this.balance += amount;
  },
  withdraw(amount) {
    if (this.balance >= amount) {      
      this.createTransaction(operation.WITHDRAW, amount);
      this.balance -= amount;
      console.log("Withdrawed");
    } else {
      console.log("not enough");
    }
  },
  getTransactions() {
    return this.transactions;
  },
};
account.deposit(1000)
account.deposit(1000);
account.withdraw(2005)
console.log(account)
console.log(account.getTransactions());