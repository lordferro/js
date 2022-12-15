<!-- const clients = ["Mango", "Poly", "Ajax"]; -->

// Указывая в скобках индекс элемента мы получаем его значение (без пробела)
console.log(clients[0]); // Mango
console.log(clients[1]); // Poly
console.log(clients[2]); // Ajax

____________________________
<!-- for (const variable of iterable) { -->
  // тело цикла
}

variable — переменная которая будет хранить значение элемента на каждой итерации.
iterable — коллекция, которая имеет перечислимые элементы, например массив.
const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
}
______________________________________________
<!-- //Операторы break и continue -->
Будем искать имя клиента в массиве имен, если нашли - прервем цикл, так как нет смысла искать дальше, имена у нас уникальные.

const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Poly";
let message;

for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
  if (client === clientNameToFind) {
    message = "Клиент с таким именем есть в базе данных!";
    break;
  }

  // Если они не совпадают то запишем в message сообщение об отсутствии имени
  message = "Клиента с таким именем нету в базе данных!";
}

console.log(message); // "Клиент с таким именем есть в базе данных!"
______________________________
<!-- Используем цикл для вывода только чисел больше определенного значения. -->

const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

// Для чисел меньше чем порог срабатывает continue, выполнение тела прекращается
// и управление передаётся на следующую итерацию.
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }

  console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
}
______________________________-
<!-- Сложные типы - объекты, массивы, функции присваиваются по ссылке, то есть переменная просто получает ссылку на уже существующий объект. -->

const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
const b = a;
console.log(a); // ["Mango"]
console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
a.push("Poly");
console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
console.log(b); // ["Mango", "Poly"]

// Результат повторяется
b.push("Ajax");
console.log(a); // ["Mango", "Poly", "Ajax"]
console.log(b); // ["Mango", "Poly", "Ajax"]
______________________________________
<!-- Методы split() и join() -->
Метод split(delimiter) превращает строку в массив, «разбив» её по разделителю delimiter. Если разделитель это пустая строка, то получится массив отдельных символов. Разделителем может быть один или несколько символов.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript это интересно";
console.log(message.split(" ")); // ["JavaScript", "это", "интересно"]

Метод массивов join(delimiter) соединяет элементы массива в строку. В строке элементы будут разделены символом или группой символов указанных в delimiter. То есть это операция обратная методу строк split(delimiter).

const words = ["JavaScript", "это", "интересно"];
console.log(words.join("")); // "JavaScriptэтоинтересно"
console.log(words.join(" ")); // "JavaScript это интересно"
console.log(words.join("-")); // "JavaScript-это-интересно"
_______________________
<!-- Метод indexOf() -->
indexOf(value) возвращает первый индекс, в котором элемент со значением value был найден в массиве, или число -1, если такого элемента нет. Используйте indexOf тогда, когда необходимо получить непосредственно индекс элемента.

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1
_____________________________
<!-- Метод includes() -->
includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Poly")); // true
console.log(clients.includes("Monkong")); // false
________________________________
<!-- Проверка множественных условий с includes() -->
// Выносим варианты в массив
const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";
// Проверяем наличие элемента
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}
________________________________
<!-- Методы push() и pop() unshift() shift() -->
Добавляют или удаляют крайние элементы массива. Работают только с крайним левым (unshift() shift()) и крайним правым (push() и pop()) элементом и не могут поставить или удалить элемент с произвольной позиции.
<!-- Метод slice() -->
slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние start элементов

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

Если не указан end, копирование будет от start и до конца исходного массива.

const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]
console.log(clients.slice(2)); // ["Poly", "Kiwi"]
_____________________
<!-- Метод splice() -->

const scores = [1, 2, 3, 4, 5];

// Удаляем три элемента массива, начиная с первого элемента (индекс 0)
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента
console.log(deletedScores); // [1, 2, 3]
________________________________
<!-- Добавление -->
Для того чтобы добавить один или несколько элементов в массив, необходимо передать три или более аргумента, при этом второй аргумент должен быть равен нулю.

splice(position, 0, new_element_1, new_element_2, ...)

Аргумент position указывает начальную позицию в массиве, куда будут вставлены новые элементы.
Второй аргумент это ноль, он говорит методу не удалять элементы в месте добавления новых.
Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
Например, у нас есть массив с названиями цветов в виде строк. Добавим новый цвет перед элементом с индексом 2.

const colors = ["red", "green", "blue"];

colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
_____________________________________________
<!-- Замена -->
Замена это операция добавления в которой удаляются элементы в месте добавления новых. Для этого необходимо передать минимум три аргумента. Количество удаляемых и добавляемых элементов может не совпадать.

splice(position, num, new_element_1, new_element_2, ...)

position - указывает позицию (индекс) первого элемента для удаления
num - определяет количество удаляемых элементов
Третий, четвертый и все последующие аргументы - это новые элементы, которые добавляются в массив.
например, у нас есть массив языков программирования из четырех элементов.

const languages = ["C", "C++", "Java", "JavaScript"];

// Заменяем элемент с индексом 1 на новый
languages.splice(1, 1, "Python");
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Заменяем один элемент (с индексом 2) на несколько
languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]
___________________________________
<!-- Метод concat() -->
Объединяет два или более массива в один. Он не изменяет массив на котором вызывается, а возвращает новый. Порядок аргументов метода влияет на порядок элементов нового массива.

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
console.log(newClients); // ["Monkong", "Singu"]
________________________________________
<!-- добавить к каждому елементу массива строку. -->

const numbers = [1,2,3];
for (let i = 0; i <= numbers.length-1; i+=1) {
    numbers[i] += "+1";
}
console.log(numbers);
_________________________________________