console.log(!!0 , !!"" , !!'' , !!`` , !!false , !!null , !!undefined , !!-0 , !!0n , !!NaN); //falsy
console.log(!![] , !!{} , !!" " , !!"erfan" , !!"0" , !!1 , !!-1 , !!-0.1 , !!Infinity); //truthy
console.log(

    false == null,
    false == undefined,
    NaN == NaN,
    Infinity == true,
    [] == true,
    [0] == true,

); //falsy ->type & data