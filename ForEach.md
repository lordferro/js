<!-- Метод forEach -->
const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

_________________________________

const numbers = [5, 10, 15, 20, 25];
// Перебирающий forEach
numbers.forEach(function (i, a) {
  console.log(`Индекс ${i}, значение ${a}`);
});
