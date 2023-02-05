POST	Создать новый ресурс
GET	Получить набор ресурсов или один ресурс
PUT	Обновить существующий или создать новый ресурс
PATCH	Обновить существующий ресурс
DELETE	Удалить ресурс

______________________________

Коды ответов
На запрос клиента сервер отправляет ответ, который содержит код состояния, чтобы информировать клиента о результате операции. Коды делятся на группы.

Group	Description
1XX	Несут информационное назначение
2XX	Коды успешного проведения операции
3XX	Описывают все, что связано с перенаправлением (redirect)
4XX	Указывают на ошибки клиента
5XX	Указывают на ошибки со стороны сервера
_____________________________________________

Если мы хотим получить данные о всех клиентах, GET запрос будет выглядеть так.

GET bookstore.com/api/customers
Accept: application/json

На что сервер отправит нам такой ответ.

Status: 200 OK
Content-Type: application/json
Body: JSON-данные о всех клиентах

Для получения данных одного клиента мы указываем его идентификатор, уточняя GET запрос.

GET bookstore.com/api/customers/289
Accept: application/json

На что сервер отправит нам такой ответ.

Status: 200 OK
Content-Type: application/json
Body: JSON-данные о клиенте

Для того чтобы добавить нового клиента выполняем POST запрос.

POST bookstore.com/api/customers
Content-Type: application/json
Body: { "username": "Mango", "email": "mango@gmail.com" }

Сервер добавляет уникальный идентификатор и возвращает объект целиком как результат.

Status: 201 Created
Content-type: application/json
Body: { "id": 18674, "username": "Mango", "email": "mango@gmail.com" }
__________________________________________

Символ ? указывает на старт параметров запроса. Каждый параметр это пара имя=значение. Символ & используется для указания смыслового «И», разделяя параметры в строке запроса.

const url = "https://jsonplaceholder.typicode.com/users?_limit=7&_sort=name";
_________________________________

***Класс URLSearchParams***

Параметров может быть много, и составлять из них одну длинную строку не удобно, как для читабельности, так и для её последующего редактирования. При составлении строки параметров создаётся экземпляр класса URLSearchParams и инициализируется объектом. Результатом будет специальный объект (итератор) с методами, который в строчном преобразовании возвращает результат вызова метода toString() - своё строчное представление.

const searchParams = new URLSearchParams({
  _limit: 5,
  _sort: "name",
});

console.log(searchParams.toString()); // "_limit=5&_sort=name"

const url = `https://jsonplaceholder.typicode.com/users?${searchParams}`;
console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"

В строчном виде свойства объекта станут параметрами и их значениями. Параметры будут разделены символом &. При интерполяции значения в шаблонных строках происходит его неявное преобразование к строке, поэтому не нужно вызывать метод toString() при составлении URL. Не забывайте указывать начало строки запроса символом ?.

____________________________________________

HTTP-заголовки
Класс Headers позволяет выполнять различные действия в заголовках HTTP-запроса и ответа. Эти действия включают в себя извлечение, настройку, добавление и удаление заголовков.

const headers = new Headers({
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
});

headers.append("Content-Type", "text/bash");
headers.append("X-Custom-Header", "custom value");
headers.has("Content-Type"); // true
headers.get("Content-Type"); // "text/bash"
headers.set("Content-Type", "application/json");
headers.delete("X-Custom-Header");

На практике для составления заголовков запроса обычно использут просто литерал объекта со свойствами. В таком случае методов не будет, что зачастую и не требуется.

const headers = {
  "Content-Type": "application/json",
  "X-Custom-Header": "custom value",
};

Запрос с использованием заголовков будет выглядеть так.

fetch("https://jsonplaceholder.typicode.com/users", {
  headers: {
    Accept: "application/json",
  },
}).then(response => {
  // ...
});

_____________________________________________



