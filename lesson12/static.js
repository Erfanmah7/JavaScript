class Student{

    constructor(){
    
    this.#init();
    
    }

static #student = [];
static count(){

return this.#student.length;

}

static search(id){

return this.#student.find(stud => stud.id == id);

}


#init(){

Student.#student.push({id:1,name:"ali"});
Student.#student.push({id:2,name:"erfan"}); 
Student.#student.push({id:3,name:"milad"});
Student.#student.push({id:4,name:"yousef"});
Student.#student.push({id:5,name:"mohammad"});

}


}

class bestStudent extends Student {

constructor(){
    super();

}

static any(){

    return super.count();

}

}

new Student(); //first call init & not new Student().init();
console.log(Student.count());
console.log(Student.search(2));
console.log(bestStudent.any());