console.log(a);

test(); // invoke

var a = 100;

function test() {
  var z = 999;

  console.log('testing');
}

// disadvantage -> every varaible and functions was getting hoisted
let x = 7;
const y = 10;

// arrow function
const testArrow = () => {
  console.log(x);
  console.log(y);
}

testArrow();