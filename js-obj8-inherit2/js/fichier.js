let user = {
    active: true
};

let teacher = {
    class: "math"
}

let student = {
    note: "branleur"
}

Object.setPrototypeOf(teacher, user)
Object.setPrototypeOf(student, user)
console.log(teacher.active);
student.active = false; // prototype override
console.log(student.active);

//console.log(teacher);

console.log(student);
