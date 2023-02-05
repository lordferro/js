Формат JSON
JSON (JavaScript Object Notation) - современный текстовый формат хранения и передачи структурированных данных в текстовом виде. Привычный объектоподобный синтаксис JSON очень удобен. Именно в этом формате данные будут приходить и отправляться на сервер, сохраняться в локальном хранилище и т. п.

Но JSON - это не объект, а его строковое представление. Ниже приведен пример JSON файла. Синтаксис похож на объект, за исключением того, что ключи это всегда строки в двойных кавычках. Строчные значения также обязательно должны быть заключены в двойные кавычки. Значениями свойств могут быть типы string, number, object, array, boolean и null.

user.json
{
  "name": "Josh",
  "weight": 175,
  "age": 30,
  "eyecolor": "brown",
  "isHappy": true,
  "cars": ["Chevy", "Honda"],
  "favoriteBook": {
    "title": "The Last Kingdom",
    "author": "Bernard Cornwell",
    "rating": 8.38
  }
}

Javascript и JSON отлично работают вместе благодаря методам встроенного класса JSON, которые преобразуют JavaScript объект в JSON и обратно. Независимо от того, что у вас есть, можно легко получить обратное.

Метод JSON.stringify()
Принимает значение и преобразовывает его в JSON. Значением может быть число, буль, null, массив или обьект. Строки это уже валидный JSON поэтому их преобразование не имеет смысла.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

Результат вызова JSON.stringify(dog) это валидный JSON (строка), который может быть сохранен в файл или передан по сети.

Не любой JavaScript объект может быть преобразован один к одному в JSON. Например, если у объекта есть методы, то при преобразовании они будут проигнорированы.

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
  bark() {
    console.log("Woof!");
  },
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

Также при попытке преобразовать функцию в JSON, результатом будет undefined.

JSON.stringify(() => console.log("Well, this is awkward")); // undefined

Метод JSON.parse()
Чтобы получить из JSON валидное JavaScript значение, его необходимо распарсить (parse). Это операция обратная преобразованию в строку (stringify). Теперь, когда dog это валидный объект, с ним можно работать как обычно.

const json = '{"name":"Mango","age":3,"isHappy":true}';

const dog = JSON.parse(json);
console.log(dog); // {name: "Mango", age: 3, isHappy: true}
console.log(dog.name); // "Mango"
________________________________________
try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name); // "SyntaxError"
  console.log(error.message); // Unexpected token W in JSON at position 0
}

console.log("✅ This is fine, we handled parse error in try...catch");
___________________________________________
***Package.json***
{
  "name": "nodejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "MyScript": "To start it type in terminal: npm run MyScript",
    "prestart": "echo \"this is pre start\"",
    "poststart": "echo \"this is post start\"",
    "build": "babel src -d transpilated"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/preset-env": "^7.20.2",
    "express": "^4.18.2",
    "validator": "^13.7.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.20.7",
    "@babel/core": "^7.20.12"
  }
}
