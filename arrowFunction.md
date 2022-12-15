 <!-- Arrow function -->
 // Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};

<!-- explicit return -->
const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

<!-- implicit return -->
const arrowAdd = (a, b, c) => a + b + c;

___________________________
<!-- Псевдомассив arguments -->

У стрелочных функций нет локальной переменной arguments, содержащей все аргументы. Если необходимо собрать все аргументы в массив, используется операция rest.

const add = (...args) => {
  console.log(args);
};

add(1, 2, 3); // [1, 2, 3]

_____________________________
<!-- Стрелочные функции как коллбеки -->

Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);