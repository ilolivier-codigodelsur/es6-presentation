class NamesCollection {
  constructor(names = []) {
    this.names = names;
  }

  sayHello() {
    this.names.forEach(function(name) {
      console.log('Hola ' + name);
    });
  }
}

new NamesCollection([
  'Hugo', 'Paco', 'Luis',
]).sayHello();