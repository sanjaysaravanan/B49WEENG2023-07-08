// Copy by value


let a = 99;
let b = 88;

console.log('a', a);
console.log('b', b);

function test(a, b) {
  // local variables take precedence
  a = 77;
  b = 66;

  console.log('inside test function');
  console.log('a', a);
  console.log('b', b);
}

test(a, b);

console.log('a', a);
console.log('b', b);


// copy by reference

let obj = { a: 99, b: 88 };


console.log('a', obj.a);
console.log('b', obj.b);

function testReference(tempObj) {

  tempObj.a = 77;
  tempObj.b = 66;
  console.log('inside testReference function');

  console.log('a', tempObj.a);
  console.log('b', tempObj.b);

}

testReference(obj);

console.log('a', obj.a);
console.log('b', obj.b);


// copy by reference using array

let arr = [99, 88];


console.log('a', arr[0]);
console.log('b', arr[1]);

function testReferenceArr(tempArr) {

  tempArr[0] = 77;
  tempArr[1] = 66;

  console.log('inside testReference function');

  console.log('a', tempArr[0]);
  console.log('b', tempArr[1]);

}

testReferenceArr(arr);

console.log('a', arr[0]);
console.log('b', arr[1]);