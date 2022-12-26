function createProduct(obj, callBack) {
  const newObj = {...obj, id: Date.now()}
  console.log(newObj)
}



const productList = [
  {
    name: "Banana",
    amount: 5,
    price: 10,
  },
  {
    name: "apple",
    amount: 10,
    price: 8,
  },
  {
    name: "cherry",
    amount: 15,
    price: 13,
  },
];

function logProduct(product) {
  console.log(product);
};

function logTotalPrice(product) {
  console.log(product.amount * product.price)
};

function createProduct(product, callBack) {
  const newProduct = {
    ...product, id: Date.now()
  }
  callBack(newProduct);
};

createProduct(productList[1], logProduct)

__________________________________________________________________________

const TRANSACTION_LIMIT = 1000;

const account = {
  name: "Ivan",
  balance: 2000,
  withdraw(amount, onError, onSuccess) {
    if (amount > this.balance) {
      return onError("No enough of money");
    } else if (amount > TRANSACTION_LIMIT) {
      return onError("reach a limit");
    } else {
      return onSuccess("get your money")
    }
  }

}

function onSuccess(messsage) {
  console.log(`Ок, ${messsage}`);
};

function onError(messsage) {
  console.log(`No, ${messsage}`);
};

account.withdraw(101, onError, onSuccess)


___________________________________________________

const pizzaPalace = {
  pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
  order(pizzaName, onSuccess, onError) {
    if(this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
  },
};
// Change code above this line

// Callback for onSuccess
function makePizza(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

