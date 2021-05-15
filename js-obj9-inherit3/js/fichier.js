let user = {
    active: false, // by default c faux
    getName: function(){
        return this.name;
    }
};

let student = {
    name: "lolo"
}

Object.setPrototypeOf(student, user)
student.active = true; // prototype override
console.log(student.active); 
console.log(student.getName());
