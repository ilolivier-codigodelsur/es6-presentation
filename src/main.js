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

let person = getPerson();
console.log(person.greet());

// Object Destructuring
// function sayAge(person) {
//   let {name, age} = person;
//
//   console.log(`${name} is ${age} years old`);
// }
// sayAge(person);