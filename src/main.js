/**************************************
 REST
 *******************/
function sum(...numbers) {
  return numbers.reduce(
      (prev, current) => prev + current,
  );
}

console.log('rest', sum(1, 2, 3));

/**************************************
 SPREAD
 *******************/
function sumOnlyTwoNumbers(x, y) {
  return x + y;
}

let numbers = [1, 2];

console.log('spread', sumOnlyTwoNumbers(...numbers));