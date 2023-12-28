let person = {
  name: "erfan",
  family: "mohiti",
  age: 23,
};

let address = {
  zipcode: 1402,
};

let user = {
  userName: "erfan",
  password: 123456,
};

//obj & array & class =>  type refrence

let obj01 = Object.assign(person, { user }, { address });
let keys = Object.keys(person);
let values = Object.values(person);
person.birthday = "1379/07/14"; //add
person["tel"] = "09123456789"; // add
Object.freeze(address); //const & not edit
Object.defineProperty(person, "nameFather", {
  value: "mahmod",
  configurable: true, //delete...
  enumerable: true,
  writable: false, //edit
}); //Restricted access

delete person.nameFather;

for (const key in person) {
  //console.log(key); //key
  // console.log(person[key]); // value
  console.log("key :", key, ",", "value :", person[key]);
}

//spreed 
let newPerson = person;
let newPerson1 = { ...person }; //unzip
person.age = 25;

console.log(person.age); //25
console.log(newPerson.age); //25
console.log(newPerson1.age); //23
console.log(obj01);
console.log(keys);
console.log(values);
console.log(Object.getOwnPropertyDescriptor(person,"nameFather")); //access?
