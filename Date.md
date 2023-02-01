***Создание даты***
Экземпляр объекта Date это объект представляющий определённый момент времени. Создание даты без аргументов, возвращает объект хранящий дату и время на момент его инициализации, то есть текущие. В строчном преобразовании объект возвращает результат вызова метода toString(), поэтому в первом логе мы получим строку, а не объект.

<!-- Не создаётся обьект -->
const date1 = Date.now();
 <!--создаётся обьект  -->
const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"


________________________________

Метод getTime() возвращает числовое представление даты (timestamp) - количество миллисекунд прошедших с полночи 1 января 1970 года.

const date = new Date();
console.log(date.getTime()); // 1624021654154
_____________________________________

const teamMeetingDate = new Date("March 16, 2030");
console.log(teamMeetingDate);
// "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

const preciseTeamMeetingDate = new Date("March 16, 2030 14:25:00");
console.log(preciseTeamMeetingDate);
// "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"
___________________________________________-

new Date("2030-03-16");
new Date("2030-03");
new Date("2030");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");

Другой способ создания новых объектов - это передать семь чисел, которые описывают год, месяц (начинается с 0), день, часы, минуты, секунды и миллисекунды. Обязательны только первые три.

const date = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(date);
// Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)
______________________________________________________
const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getDate(): ", date.getDate());

// Возвращает день недели от 0 до 6
console.log("getDay(): ", date.getDay());

// Возвращает месяц от 0 до 11
console.log("getMonth(): ", date.getMonth());

// Возвращает год из 4 цифр
console.log(
  "getFullYear(): ",
  date.getFullYear()
);

// Возвращает час
console.log("getHours(): ", date.getHours());

// Возвращает минуты
console.log("getMinutes(): ", date.getMinutes());

// Возвращает секунды
console.log("getSeconds(): ", date.getSeconds());

// Возвращает миллисекунды
console.log(
  "getMilliseconds(): ",
  date.getMilliseconds()
);
__________________________________________________-
    const date = new Date();
console.log("Date: ", date);

// Возвращает день месяца от 1 до 31
console.log("getUTCDate(): ", date.getUTCDate());

// Возвращает день недели от 0 до 6
console.log("getUTCDay(): ", date.getUTCDay());

// Возвращает месяц от 0 до 11
console.log("getUTCMonth(): ", date.getUTCMonth());

// Возвращает год из 4 цифр
console.log("getUTCFullYear(): ", date.getUTCFullYear());

// Возвращает час
console.log("getUTCHours(): ", date.getUTCHours());

// Возвращает минуты
console.log("getUTCMinutes(): ", date.getUTCMinutes());

// Возвращает секунды
console.log("getUTCSeconds(): ", date.getUTCSeconds());

// Возвращает миллисекунды
console.log("getUTCMilliseconds(): ", date.getUTCMilliseconds());
_________________________________________________-
Все, что можно прочитать можно записать, методы для записи называются также как геттеры, но начинаются с приставки set. Также для всех методов есть их UTC эквивалент.

const date = new Date("March 16, 2030 14:25:00");

date.setMinutes(50);
// "Sat Mar 16 2030 14:50:00 GMT+0200"

date.setFullYear(2040, 4, 8);
// "Tue May 08 2040 14:50:00 GMT+0300"
______________________________________________________________
Форматирование даты
Объект даты может быть представлен в разных строчных и числовых форматах. Для этого существует целый набор методов. Например, toString(), toDateString() и toTimeString() возвращают стандартное строчное представление, не заданное жёстко в стандарте, а зависящее от браузера. Единственное требование к нему - читаемость человеком. Метод toString() возвращает дату целиком, а toDateString() и toTimeString() - только дату и время соответственно.

const date = new Date("March 16, 2030 14:25:00");

date.toString();
// "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toTimeString();
// "14:25:00 GMT+0200 (Eastern European Standard Time)"

date.toLocaleTimeString();
// "2:25:00 PM"

date.toUTCString();
// "Sat, 16 Mar 2030 12:25:00 GMT"

date.toDateString();
// "Sat Mar 16 2030"

date.toISOString();
// "2030-03-16T12:25:00.000Z"

date.toLocaleString();
// "3/16/2030, 2:25:00 PM"

date.getTime();
// 1899894300000