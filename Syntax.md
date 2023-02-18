getBoundingClientRect() - metaData of element;
window.pageYOfset - scrolled pixels;
document.elementFromPoint(0,0) - pick element on this coordinates;
__________________
"use strict"

console.log (typeof user);

undefined - тип данных переменной, которой не присвоено значение

null - есть значение и оно - ничего
_________________________________________
//обратные кавычки:
let userAge = 36;
let ageInfo = `Age: ${userAge}`;
console.log (ageInfo);
____________________________________________
Object:
let userInfo = {
    name: "sdfsdfsdf",
    age: 36
}
__________________________
//преобразование типа данных
let userAge = 38;
//type - Number
userAge = String(userAge)
//type - string
___________________________
//взятие остатка от деления
x = 11 % 3

//возведение в степень
x = 5 ** 3
______________________
//такое работает только для +
let userN = 2 + '2'
console.log = 22
________
let userAge = 38;
let userAge2 = 28;
console.log(userAge + userAge2) = 3828;
console.log(+userAge + +userAge2) = 66; // унарный оператор + преобразовует строку в число.
________________________
let userAge = 38;
userAge += 2;
получим 40
_______________
Инкремент и декремент можно применять только к переменной, но не к числу.
______________________________________

confirm('подтверждаете?') - выводит модальное окно с сообщением, и две кнопки, Ok и Cancel. При нажатии на Ok, результатом будет true, при нажатии на Cancel - возвращается false.

prompt('введите что то') - выводит модальное окно с полем ввода и кнопками Ok и Cancel. При нажатии Ok, результатом будет то, что ввел пользователь, при Cancel - возвращается null.
______________________________________
Метод Number.parseInt() парсит из строки целое число.
let elemWidth = '50px';
const result = Number.parseInt(elemWidth);
console.log(result)); // 50
console.log(Number.parseInt("12qwe74")); // 12
но если натыкается на символ - останавливается
_____________________________
<!-- Метод Number.parseFloat() парсит из строки дробное число. -->

console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
____________________________
Для всех значений val кроме NaN, при передаче в Number.isNaN(val) вернёт false. Этот метод не производит попытку преобразовать val к числу, а просто выполняет проверку на NaN.

const validNumber = Number("51"); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number("qweqwe"); // NaN
console.log(Number.isNaN(invalidNumber)); // true
___________________
<!-- ще один способ - сложить, а результат отсечь до определённого знака после запятой при помощи метода toFixed(). -->

console.log(0.17 + 0.24); // 0.41000000000000003
console.log((0.17 + 0.24).toFixed(2)); // 0.41
_________________________
<!-- Метод indexOf() -->
Возвращает позицию (индекс) на которой находится первое совпадение подстроки или -1, если ничего не найдено.

const message = "Welcome to Bahamas!";
console.log(message.indexOf("to")); // 8
console.log(message.indexOf("hello")); // -1
_____________________________
<!-- Метод includes() -->
Проверяет входит ли подстрока в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Ремонтный дроид";

console.log(productName.includes("н")); // true
console.log(productName.includes("Н")); // false
console.log(productName.includes("дроид")); // true
console.log(productName.includes("Дроид")); // false
console.log(productName.includes("Ремонтный")); // true
console.log(productName.includes("ремонтный")); // false
console.log(productName.toLowerCase().productName.includes("ремонтный")); // true

__________________________________
Метод endsWith()
Позволяет определить, заканчивается ли строка символами (подстрокой) указанными в скобках, возвращая true или false.

const jsFileName = "script.js";
console.log(jsFileName.endsWith(".js")); // true

const cssFileName = "styles.css";
console.log(cssFileName.endsWith(".js")); // false
____________________________

Math.round - округляет
______________________________
вывод длины.

let msgn = 'text';
console.log(msgn.length);
______________________________________
Метод строк slice
(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.
___________________________________

