<!-- ***setTimeout(() => {
  modal.show();
}, PROMPT_DELAY); - так вызовется по тайм ауту

setTimeout(modal.show(), PROMPT_DELAY); - так вызовется сразу*** 

setTimeout(modal.show, PROMPT_DELAY); - так вызовется как callback*** 
-->


***Метод setTimeout()*** позволяет запланировать запуск функции через определённое время.

const timerId = setTimeout(callback, delay, arg1, arg2, ...);

callback - функция, выполнение которое необходимо запланировать.
delay - время в миллисекундах, через которое callback-функция будет вызвана один раз.
Дополнительные аргументы (arg1, arg2 и т. д.) будут переданы callback-функции во время вызова. Возвращает цифровой идентификатор созданного таймера, который используется для его удаления.

const onClick = () => {
  setTimeout(() => {
    alert("I love async JS!");
  }, 2000);
};
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Если нам, по какой-то причине, нужно отменить вызов функции внутри таймаута, используется метод clearTimeout(id), которая принимает идентификатор таймера и очищает (удаляет) его.

const greet = () => {
  console.log("Hello!");
};

<!-- присваиваем переменной timerId идентификатор таймаута, так как вызов функции setTimeout возвращает идентификатор таймера -->
const timerId = setTimeout(greet, 3000);

clearTimeout(timerId);

Поскольку мы вызвали clearTimeout(), который исполнится раньше чем будет вызвана функция greet(), таймер с timerId будет удалён и регистрация отложенного вызова greet() отменится. Поэтому в консоль ничего не выведется.
<!-- example -->
const logger = (time) => {
  console.log(
    `Log after ${time}ms, 'cos we don't cancel `
  );
};

const timerId = setTimeout(logger, 2000, 2000);

clearTimeout(timerId)
______________________________________________

***Метод setInterval() *** - это простой способ повторения кода снова и снова с установленным промежутком времени повторений. Синтаксис и параметры такие же как у setTimeout(). В отличие от setTimeout(), интервал запускает выполнение функции не один раз, а регулярно повторяет её через указанный промежуток времени. Остановить исполнение можно вызовом метода clearInterval(id).

const timerId = setInterval(callback, delay, arg1, arg2, ...);

При клике на кнопку «Start» запустим интервал и будем каждую секунду выводить в консоль строку. Используем Math.random() чтобы строки были разные. По клику на кнопку «Stop» вызовем clearInterval() и передадим идентификатор интервала который надо остановить.

const startBtn = document.querySelector(".js-start");
const stopBtn = document.querySelector(".js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`I love async JS!  ${Math.random()}`);
  }, 1000);
});


stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Interval with id ${timerId} has stopped!`);
});