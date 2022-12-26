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