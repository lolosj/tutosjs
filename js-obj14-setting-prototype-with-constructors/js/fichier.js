function User(){
    this.active = false;
}

User.prototype.sayHello = function(){
    return this.name + "says hi";
}
function Student(nameOfStudent){
    this.name = nameOfStudent;
}
Student.prototype = new User();


function Teacher(nameInput){
    this.name = nameInput;
}
//Teacher.prototype = new User();
 
let student = new Student("lolo");
let teacher = new Teacher("prof");

console.log(teacher, student);

console.log(student.sayHello());
console.log(teacher.sayHello()); // error because we didnt Teacher.prototype = new User()