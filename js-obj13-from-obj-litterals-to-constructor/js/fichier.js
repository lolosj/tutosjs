function User(){
    this.active = false;
}

function Student(nameOfStudent){
    this.name = nameOfStudent;
}

function Teacher(nameInput){
    this.name = nameInput;
}
 
let student = new Student("lolo");
let teacher = new Teacher("prof");

console.log(teacher, student);