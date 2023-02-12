***Создание***
Метод POST используется для добавления нового ресурса. Метод fetch() должен отправить на сервер POST-запрос, в теле которого будет объект с полями author и body, идентификатор будет автоматически создан базой данных. Результатом такого запроса будет объект добавленный в базу данных.

const postToAdd = {
  author: "Mango",
  body: "CRUD is awesome",
};

const options = {
  method: "POST",
  body: JSON.stringify(postToAdd),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch("https://jsonplaceholder.typicode.com/posts", options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));

  В ответ, если все хорошо, получим JSON с добавленным id. Идентификатор будет уникальным для каждого объекта.

{
  "id": 1,
  "author": "Mango",
  "content": "CRUD is awesome"
}


***Обновление***

// Change value of id property to update different post
const postToUpdate = {
  id: 1,
  body: "CRUD is really awesome",
};

const options = {
  method: "PATCH",
  body: JSON.stringify(postToUpdate),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log("ERROR" + error));

В ответ, если все хорошо, получим обновленный объект.

{
  id: 1,
  author: 'Mango',
  content: 'CRUD is really awesome',
}

ИНТЕРЕСНО
Метод PATCH заменяет в существующем ресурсе значения переданные в теле запроса свойств. Метод PUT полностью заменяет ресурс.

***Удаление***

Метод DELETE используется для удаления существующих данных. Метод fetch() должен отправить на сервер DELETE-запрос без тела. Путь указывает в какой коллекции и какой элемент мы хотим удалить. Бекенд, по получению запроса, обработает его, удалит ресурс из коллекции и в ответе вернет статус результата.

const postIdToDelete = 1;

fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
  method: "DELETE",
})
  .then(() => console.log("Post deleted"))
  .catch(error => console.log("Error:", error));

  