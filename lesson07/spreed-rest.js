let nums = [5, 6, 7];

//spreed

function getArgs(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

getArgs(...nums);

let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];
let char = [..."erfan"];

let obj1 = {
  a: 21,
  b: 22,
  c: 23,
};

let obj2 = {
  c: 26,
  d: 27,
  f: 28,
};

let copy = { ...obj1, ...obj2, ...{ c: 30 } };

console.log(...numbers2.reverse(), ...numbers1.reverse());
console.log(char);
console.log(copy);

//rest...

//let numbers = [1, 5, 5, 6, 8, 98, 8, 79, 498, 49, , 984, 9, 2, 345];

function getNum(...numbers) {
  console.log(numbers.reduce((prev, curr) => prev + curr, 0));
}

//numbers 1 ,2,3,......
getNum(1,2,3,4,5,6,7,8);
