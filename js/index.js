const form = document.getElementById("form");
const price = document.getElementById("price");
const quantity =
  document.getElementById("quantity");
const amount = document.getElementById("amount");
const total = document.getElementById("total");

const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return (this.price * this.quantity).toFixed(
      2
    );
  },
};

// data fill
dataFill();
displayTotalPrice();

form.addEventListener("change", handleFormChange);

// functions
function handleFormChange({ target }) {
  const { value } = target;

  if (target === quantity) {
    // data.quantity = value; we do that with dataFill and setAttribute function
    amount.textContent = value;
  }
  //   else if (target === price) {
  //     data.price = value;
  //     }

  // if we change value in form - it should be changed in html markup also.
  target.setAttribute("value", value);
  dataFill();
  displayTotalPrice();
}

function dataFill() {
  data.price = price.getAttribute("value");
  data.quantity = quantity.getAttribute("value");
}

function displayTotalPrice() {
  total.textContent =
    data.calcTotalPrice() + " UAH";
}
