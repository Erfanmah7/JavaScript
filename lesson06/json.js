let user = {
  id: "001",
  userName: "erfan",
  password: 123456,
};

let json = JSON.stringify(user, null, 4); //string json & strinify is deep copy
let obj = JSON.parse(JSON.stringify(user)); //string json to obj
user.id = "002";
console.log(json);
console.log(obj);
console.log(user); //not deep copy
