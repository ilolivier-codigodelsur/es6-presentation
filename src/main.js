class User {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}

let users = [
  new User('Pepe', false),
  new User('Juan', true),
  new User('Felipe', false),
  new User('Jose', true),
];

console.log(
    users.find(user => user.isAdmin),
    users.findIndex(user => user.isAdmin),
);