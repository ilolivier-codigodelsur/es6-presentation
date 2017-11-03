function getPerson() {
  let name = 'John';
  let age = 25;

  return {
    name: name,
    age: age,

    greet: function() {
      return 'Hello, ' + this.name;
    },
  };
}

console.log(getPerson().greet());