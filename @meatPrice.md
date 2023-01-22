    <div class="container">
      <h2>Meat Price</h2>
      <form action="#" class="form" id="form">
        <label for="price">Price pr kg</label>
        <input type="text" name="price" id="price" value="50">
        <label for="quantity">quantity <span class="amount" id="amount">1</span> kg</label>
        <input type="range" name="quantity" id="quantity" value="1" min="1" max="20">
      </form>
      <p class="text-right total" id="total"></p>
    </div>


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
displayTotalPrice()

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
    target.setAttribute("value", value)
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
