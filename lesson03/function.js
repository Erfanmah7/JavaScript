function sum(num1 = 1, num2 = 6) {
  return num1 + num2;
}

let func0 = (num1 = 1, num2 = 6) => num1 + num2;

let func1 = function sum(num1 = 1, num2 = 6) {
  return num1 + num2;
};

let func2 = function (num1 = 1, num2 = 6) {
  return num1 + num2;
};

console.log(sum());
console.log(func0());
console.log(func1());
console.log(func2(5,5));
