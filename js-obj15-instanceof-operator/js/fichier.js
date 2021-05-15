function User(){
    this.active = false;
}

User.prototype.sayHello = function(){
    return this.name + "says hi";
}
function Student(nameOfStudent){
    this.name = nameOfStudent;
}
Student.prototype = new User(); // student is both a student and a user


function Teacher(nameInput){
    this.name = nameInput;
}
//Teacher.prototype = new User();
 
let student = new Student("lolo");
let teacher = new Teacher("prof");

console.log(student instanceof Student); // true
console.log(student instanceof User);// true because we did Student.prototype = new User();
console.log(teacher instanceof Teacher); // true
console.log(teacher instanceof User);// false

function doSomething(user){
    if (user instanceof User) {
    console.log("do smth");
    } else {
        console.log("nop" + user.name + " is not a user");
    }
}

doSomething(student); // ok because student is an instance of User
doSomething(teacher); // wont do smth because teacher is not an inst of U
doSomething("lolo"); // 
