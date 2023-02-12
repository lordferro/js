При ошибке parcel с async - создаем в корне .browserslistrc
and add:
last 3 and_chr versions
last 3 chrome versions
last 3 opera versions
last 3 ios_saf versions
last 3 safari versions
_______________________________________________


Для объявления асинхронной стрелочной функции, перед списком параметров добавляем ключевое слово async. Внутри неё можно использовать оператор await и справа от него поставить что-то, что вернёт промис. Метод response.json() также возвращает промис, поэтому ставим await.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers().then(users => console.log(users));

Когда интерпретатор встречает await, он приостановливает выполнение этой функции (не всего скрипта) и ждет, пока не выполнится промис справа от await. Как только промис выполнился - исполнение функции возобновляется и на строке ниже нам доступен результат асинхронной операции.

Оператор await можно использовать только в теле асинхронной (async) функции.
Оператор await приостанавливает функцию пока промис не выполнится (fulfilled или rejected).
Если промис выполнился успешно (fulfilled), оператор await вернет его значение.
Если промис был отклонен с ошибкой (rejected), оператор await выбросит ошибку.
Асинхронная функция всегда возвращает промис, поэтому любое возвращаемое значение будет его значением.
Если не указать возвращаемое значение, вернется промис со значением undefined.

Любая функция может быть асинхронной, будь-то метод обьекта, класса, коллбэк, объявление или инлайн функция. Все они смогут использовать оператор await и обязательно вернут промис, потому что будут асинхронными функциями.

// Function declaration
async function foo() {
  // ...
}

// Functional expression
const foo = async function () {
  // ...
};

// Arrow function
const foo = async () => {
  // ...
};

// Object method
const user = {
  async foo() {
    // ...
  },
};

// Class method
class User {
  async foo() {
    // ...
  }
}

***Обработка ошибок***

Если результат асинхронной функции (промис) не используется во внешнем коде, ошибки обрабатываются в теле функции конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

fetchUsers();

Если результат асинхронной функции (промис) используется во внешнем (глобальном) коде, то есть вне других асинхронных функций, ошибки обрабатываются коллбэком методом catch(). Значение параметра error в методе catch() это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

fetchUsers()
  .then(users => console.log(users))
  .catch(error => console.log(error));

Так работать не будет - await можно использовать только в теле асинхронной функции.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

// ❌ SyntaxError: await is only valid in async function
const users = await fetchUsers();

Если результат асинхронной функции используется в другой асинхронной функции, ошибки обрабатываются конструкцией try...catch. Значение параметра error в блоке catch это ошибка которую сгенерирует await если промис будет отклонен.

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
};

const doStuff = async () => {
  try {
    const users = await fetchUsers();
    console.log(users);
  } catch (error) {
    console.log(error.message);
  }
};

doStuff();

***Параллельные запросы***

const fetchUsers = async () => {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const userIds = [1, 2, 3];

  // 1. Создаём массив промисов
  const arrayOfPromises = userIds.map(async userId => {
    const response = await fetch(`${baseUrl}/users/${userId}`);
    return response.json();
  });

  // 2. Запускаем все промисы параллельно и ждем их завершения
  const users = await Promise.all(arrayOfPromises);
  console.log(users);
};

fetchUsers();
При таком подходе запросы запускаются параллельно, что экономит время ожидания их выполнения, которое равно длительности самого «медленного» из них. Такой приём подходит только если запросы не зависят друг от друга.