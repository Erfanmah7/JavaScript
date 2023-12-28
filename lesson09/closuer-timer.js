//closuer

function sum(x) {
  return function name(y) {
    return x + y;
  };
}

function makeCounter() {
  let praivatCounter = 0;
  function changeBy(value) {
    praivatCounter += value;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },
    value() {
      return praivatCounter;
    },
  };
}

let counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

console.log("-----------------------");

let add = sum(5); //func1 =>param (x)
let resulat = add(6); //func2 =>param (y)

console.log(resulat);

//timer

setTimeout(() => console.log("hi erfan"), 1000); // next 1s

setInterval(() => console.log("my love"), 3000); //interval => for.. 3s ..
