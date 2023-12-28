let num1 = 1 , num2 = 5;
let num3;
let num4 = 12; 

if (num1>num2) {
    
console.log("yes");

}else{

console.log("no");

}

//terny operator
console.log(num1>num2 ? "yes" : "no"); //condition ? true : false;

// nullish operator ?? == ||
console.log(num3 ?? "yes"); // undifinde & null ?? name; => name
console.log(num4 ?? "yes"); // !undifinde & !null ?? name; => !undifinde