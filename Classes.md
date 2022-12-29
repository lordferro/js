Классы принято называть с большой буквы, а в самом названии отражать тип создаваемого объекта (существительное).

class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User("Поли", "poly@mail.com");
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

Вызов класса с оператором new приводит к созданию нового объекта и вызову конструктора в контексте этого объекта. То есть this внутри конструктора будет ссылаться на новосозданный объект. Это позволяет добавлять каждому объекту свойства с одинаковыми именами, но разными значениями.

Свойства name и email называются публичные свойства, потому что они будут собственными свойствами объекта-экземпляра и к ним можно будет получить доступ обратившись через точку.

<!-- Объект параметров -->

Класс может принимать большое количество входных данных для свойств будущего объекта. Поэтому к ним также можно применить паттерн «Объект параметров, передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

class User {
  // Деструктуризируем объект
  *** Тут важно поставить значение по умолчанию ***
  constructor({ name, email } = {})  {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
console.log(mango); // { name: "Манго", email: "mango@mail.com" }

const poly = new User({
  name: "Поли",
  email: "poly@mail.com",
});
console.log(poly); // { name: "Поли", email: "poly@mail.com" }

<!-- Методы класса -->

Для работы со свойствами будущего экземпляра используются методы класса - функции которые будут доступны экземпляру в его прототипе.

class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  // Метод getEmail
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}
<!-- Приватные свойства -->

Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса. Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.

В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.

Допустим, почта пользователя должна быть недоступна для прямого изменения из вне, то есть приватна. Добавляя к имени свойства символ # мы делаем его приватным. Объявление приватного свойства до инициализации в конструкторе - обязательно.

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Манго",
  email: "mango@mail.com",
});
mango.changeEmail("mango@supermail.com");
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство

Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.

<!-- Get и Set -->

Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами. Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом. Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.

Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных, как их публичный интерфейс. Для работы со свойством которое хранит массив или объект они не подойдут.

class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}

Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение. Геттер и сеттер идут впаре и должны называться одинаково.

const mango = new User({ name: "Манго", email: "mango@mail.com" });
console.log(mango.email); // mango@mail.com
mango.email = "mango@supermail.com";
console.log(mango.email); // mango@supermail.com

При обращении к mango.email вызызвается геттер get email() {...} и выполняется его код. При попытке записи mango.email = "mango@supermail.com" вызывается сеттер set email(newEmail) {...} и строка "mango@supermail.com" будет значением параметра newEmail.

Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

set email(newEmail) {
  if(newEmail === "") {
    console.error("Ошибка! Почта не может быть пустой строкой!");
    return;
  }

  this.#email = newEmail;
}

<!-- Статические свойства -->

Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся к самому классу.

Добавим классу пользователя приватное свойство role - его роль, определяющую набор прав, например администратор, редактор, просто пользователь и т п. Возможные роли пользователей будем хранить как статическое свойство Roles - объект со свойствами.

Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

class User {
  // Объявление и инициализация статического свойства
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

// Если добавить метод вне класса
User.static = function () {
    console.log("static ");
}
// он будет статическим

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});

console.log(mango.Roles); // undefined
console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

console.log(mango.role); // "admin"
mango.role = User.Roles.EDITOR;
console.log(mango.role); // "editor"

Статические свойства также могут быть приватные, то есть доступные только внутри класса. Для этого имя свойства должно начинаться с символа #, также как приватные свойства. Обращение к приватному статическому свойству вне тела класса вызовет ошибку.

<!-- Статические методы -->

В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, которые могут быть как публичные так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того что значением будет метод.

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("poly@mail.com"));
console.log(User.isEmailTaken("mango@mail.com"));

Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. Это значит что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. Логично, потому что статические методы вызывает сам класс, а не его экземпляры.

<!-- Наследование классов -->

Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства и методы другого класса (родителя).

class Child extends Parent {
  // ...
}

В выражении class Child extends Parent дочерний класс Child наследует (расширяет) от родительского класса Parent.

Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

Например, в приложении есть пользователи разных ролей - администратор, писатель статей, контент менеджер и т. п. У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, и при необходимости изменить например название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, после чего сделать классы для каждого типа пользователя которые наследуют этот набор от класса User. При необходимости изменить что-то общее, достаточно будет поменять только код класса User.

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  // Тело класса ContentEditor
}

const editor = new ContentEditor("mango@mail.com");
console.log(editor); // { email: "mango@mail.com" }
console.log(editor.email); // "mango@mail.com"

Класс ContentEditor наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. Важно помнить что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

???????????? 

class User {
  // Деструктуризируем объект
    #email;
    email2;
    
    constructor({ email, email2 }) {
    this.#email = email;
    this.email2 = email2;
  }

  getEmail() {
    return this.#email;
  }
  getEmail2() {
    return this.email2;
  }
}



const poly = new User({
  email: "poly@mail.com",
  email2: "Поли",
});
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

class admin extends User {

}

const ad = new admin({
    email: "lordferro@gmail.com",
    email2: "Fedor",
})

console.log(ad.email);
*** приватное свойство присутствует в экземпляре, но его нельзя прочитать или перезаписать ***


<!-- Конструктор дочернего класса -->

Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего класса, будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'

<!-- Методы дочернего класса -->

В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']
