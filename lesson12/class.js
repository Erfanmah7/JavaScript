class animal {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  do() {
    return `name : ${this.name} and age : ${this.age}`;
  }
}

class cat extends animal {
  sound(sounding) {
    return sounding;
  }
}

class dog extends animal {

walk;
constructor(name,age,walk) {
super(name,age,walk);
    this.name = name;
    this.age = age;
    this.walk = walk;
  }

    sound(sounding) {
      return sounding;
    }
  }
 

class person{

firstname; 
lastname;
#Age;
constructor(firstname="erfan",lastname="mohiti"){
this.firstname = firstname;
this.lastname = lastname;
}

set setWatch(value){

if(value == 12) return this.#Age = 18;
 else return this.#Age = 17;
}

get getWatch(){

    if(this.#Age > 19) return this.#Age;
    return "bye";

}

}

let cat1 = new cat("jak", "3");
console.log(cat1.do(),"sound : ",cat1.sound("miue"));

let dog1 = new dog("odi", "6","run");
console.log(dog1.do(),"sound : ",dog1.sound("hap"),"walk : ",dog1.walk);

let human =new person("ali","alizade");
console.log(human.firstname,human.lastname);

let human1 =new person();
console.log(human1.firstname);

let human2 =new person();
human2.setWatch = 17;
console.log(human2.getWatch);

