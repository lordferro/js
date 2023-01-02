<!-- Скрипт обязательно подключается type="module" -->

import products from './products.js'
console.log(products);

const makeProductCard = ({name, description, price}) => {
    const productEl =
    document.createElement("article");
    productEl.classList.add("product");

    const productTitleEl =
    document.createElement("h2");
    productTitleEl.classList.add("product__name");
    productTitleEl.textContent = name;

    const productDescriptionEl =
    document.createElement("p");
    productDescriptionEl.classList.add(
    "product__descr"
    );
    productDescriptionEl.textContent =
    description;

    const productPriceEl =
    document.createElement("p");
    productPriceEl.classList.add("product__price");
    productPriceEl.textContent = price;

    productEl.append(
      productTitleEl,
      productDescriptionEl,
      productPriceEl
    );

    return productEl;
}

const elements = products.map(makeProductCard) //callBack

//const elements = products.map(
//   (product) => makeProductCard(product)
// ); //callBack

console.log(elements);

const productsContainerEl =
    document.querySelector(".js-color-picker");
  
productsContainerEl.append(...elements)