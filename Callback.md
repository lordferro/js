<!-- // Колбэк-функция -->
function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
}

// Функция высшего порядка
function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);

Мы передали ссылку на функцию greet как аргумент, поэтому она будет присвоена в параметр callback и вызвана внури функции registerGuest через круглые скобки. Имя параметра для колбэка может быть произвольным, главное помнить, что значением будет функция.

<!-- Инлайн колбэки -->

Если колбэк-функция маленькая и нужна только для передачи аргументом, её можно объявить прямо при вызове функции в которую передаём колбэк. Такая функция будет доступна только как значение параметра и больше нигде в коде.

function registerGuest(name, callback) {
  console.log(`Регистрируем гостя ${name}.`);
  callback(name);
}

// Передаём инлайн функцию greet как колбэк
registerGuest("Манго", function greet(name) {
  console.log(`Добро пожаловать ${name}.`);
});

// Передаём инлайн функцию notify как колбэк
registerGuest("Поли", function notify(name) {
  console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
});
++++++++++++++++++++++++++++++++++++++
const doMath = function (a, b, callBack) {
    console.log(callBack(a, b))
}

doMath(2, 3, function (x, y) {
    return x + y;
});

____________________________


<!-- //we will choose ifAvailable or ifNotAvailable based on Math.random -->
function callProcess(name, ifAvailable, ifNotAvailable) {
  <!-- //Rundom number, true if more then 0.5 -->
  const isAvailable = Math.random() > 0.5; 

  if (isAvailable) {
    <!-- // if true -->
    <!-- // means available -->
    ifAvailable(name);
    return
  }
  <!-- // else not available -->
  ifNotAvailable(name);
}

function takeCall(name) {
  console.log("dialing")
};

function message(name) {
  console.log("voice message");
}

function video(name) {
  console.log("video");
}

callProcess("Ivan", takeCall, message);

_____________________________________________________
<!-- Но что, если мы хотим сделать что-то, кроме логирования чисел? Поскольку «делать что-то» можно представить как функцию, а функции - это просто значения, мы можем передать действие как аргумент. -->

function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
}

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2
__________________________________________
<!-- filtering random array using inline function  -->

const filter = function (array, operationFn) {
    const filteredArray = [];

    for (const el of array) {
        if (operationFn(el)) {
            filteredArray.push(el)
        }
    }
    return filteredArray
}

console.log(
  filter([1, 2, 3], function (value) {
    return value > 2;
  })
);