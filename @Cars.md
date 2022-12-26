const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const getModels = (cars) => cars.map((car) => car.model);
console.log(getModels(cars));

const getCarsWithDiscount = (cars, discount) =>
  cars.map((car) => ({ ...car, price: car.price - car.price * discount }));
console.log(getCarsWithDiscount(cars, 0.2));

// возвращает массив авто с ценой ниже threshold
const filteredByPrice = (cars, threshold) =>
  cars.filter((car) => car.price < threshold);
console.log(filteredByPrice(cars, 30000));

// get car by model

const getCarByModel = (cars, model) => 
  cars.find(car => car.model === model);
console.log(getCarByModel(cars, "CX-9"));
 
//  new array sorted ascending by amount

//в этом случае мы все равно изменяем основной массив, так как тут const sortedCars = cars.sort((first, second) => first.amount - second.amount) передаём ссылку на основной, а не сохдаём новый
// const sortByAscAmount = cars => {
//   const sortedCars = cars.sort((first, second) => first.amount - second.amount)
//   return sortedCars;
// }
// console.log(sortByAscAmount(cars));
// console.log(cars)

// тут мы создаём новый массив
const sortByAscAmount = (cars) => {
  const sortedCars = [...cars];
  sortedCars.sort((first, second) => first.amount - second.amount);
  return sortedCars;
};
console.log(sortByAscAmount(cars));
console.log(cars);

// Посчитать общее количетсво авто

const getTotalAmount = cars => {
  return cars.reduce((acc, car) => acc + car.amount, 0);
}
console.log(getTotalAmount(cars));

// get sorted ascending price cars on sale

const getSortedCarsOnSale = cars => {
  const sorted = [...cars];
  return sorted.filter(car => car.onSale === true).sort((a,b) => a.price - b.price) 
}
console.log(getSortedCarsOnSale(cars));
