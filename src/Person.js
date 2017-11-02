class Person {
  constructor(name) {
    this.name = name;
  }
  
  greet() {
    return this.name + ' los saluda.';
  }
}

console.log(new Person('Ivan').greet());