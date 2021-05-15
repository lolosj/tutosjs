let user = {
    active: true
};

let teacher = {
    class: "math"
}

Object.setPrototypeOf(teacher, user)
console.log(teacher.active);
