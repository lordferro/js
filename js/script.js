const User = function ({ name, email }) {
    this.name = name;
    this.email = email;
}

const Ivan = new User({ name: 'Ivan', email: "as@as" })
console.log(Ivan);