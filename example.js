import Mammal from 'mammal';

class Person extends Mammal {
  
  constructor(name = 'John', surname = 'Doe', sons = []) {
    super(name, surname, sons);
    
    this.name = name;
    this.surname = surname;
    this.sons = sons;
  }
  
  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  
  greet() {
    return `Hello, says ${this.fullName}`;
  }
  
  isSon(boy) {
    return this.sons.find(son => son === boy);
  }
  
  static generateName() {
    return 'Random name';
  }
  
}