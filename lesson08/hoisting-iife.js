//hoisting => var & function => global

x = 20;
func01();
console.log("hoisting: ", x);

function func01(params) {
  console.log("hoisting: hello erfan");
}

var x = 10;

console.log(x);

//IIFE => scope

let y = "ali"; //global

{
  let y = "erfan";
  console.log("local scope: " + y);
}

(function newLog(a,b) {
  let y = "reza";
  console.log("local: " + y);
  console.log("local: ",a+b);
  //newLog(); //repeat..
})(2,4); // (params);

//newLog(); // not access

console.log("global: " + y);
