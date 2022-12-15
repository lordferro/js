"use strict";

let stars = 7;
let price;

if (stars === 1) {
  price = 20;
} else if (stars === 2) {
  price = 30;
} else if (stars === 3) {
  price = 40;
} else if (stars === 4) {
  price = 50;
} else if (stars === 5) {
  price = 60;
} else {
  price = NaN;
}

switch (stars) {
  case 1:
    price = 20;
    break; // прервет свитч в случае совпадения
  case 2:
    price = 30;
    break;
  case 3:
    price = 40;
    break;
  case 4:
    price = 50;
    break;
  case 5:
    price = 60;
    break;

  default:
    price = NaN;
}

console.log(price);

___________________;
switch (stars) {
  case 1: // 1 или 2
  case 2:
    price = 20;
    break; // прервет свитч в случае совпадения

  case 3:
  case 4:
    price = 40;
    break;

  case 5:
    price = 60;
    break;

  default:
    price = NaN;
}

console.log(price);
