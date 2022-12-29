
*** Добавление функций в конструктор для прототипного наследования в экземпляры ***
const constructor = function (x) {
    console.log(x);
}

constructor.prototype.fnInConstructor = function (y) {
    console.log(y);
}

constructor.prototype.fnInConstructor("Вызов fnInConstructor из конструктора");

const exemplar = new constructor()
exemplar.fnInConstructor("вызов fnInConstructor из экземпляра")
___________________________________________
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  // так обьявлен - это функция копируется в экземпляры
  getNames = function () {
    console.log(this.name);
  };

  // Метод getEmail - записывается ссылка через прототипы
  getEmail() {
    return this.email;
  }

  // Метод changeEmail
  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

// Статический метод будет достпуен в конструкторе, но не в экземплярах или их прототипах
User.staticMethod = function () {
    console.log("I am static, i am not in exemplars or protoypes");
}
 console.dir(User);


const ivan = new User({ name: "Ivan", email: "asd@asd" });
const Fedor = new User({ name: "Fedor", email: "fff@asd" });

console.log(ivan);
console.log(Fedor);
console.log(ivan.getEmail === Fedor.getEmail);



_________________________________________
const objA = {
    x: 5,
};
console.log(objA.__proto__ === Object.prototype);



