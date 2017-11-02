function testVar(option) {
  if (option === 1) {
    var foo = 'bar';
    console.log(foo);
    
  } else if (option === 2) {
    console.log(foo);
    
  } else {
    console.log(otherVar);
    
  }
}