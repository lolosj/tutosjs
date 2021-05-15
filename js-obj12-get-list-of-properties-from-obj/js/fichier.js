 let user = {
    active: false, // by default c faux
    getName: function(){
        return this.name;
    },
    getFunc: function(){
        return "default";
    }
};

let student = {
    name: "lolo"
}

let teacher = {
    name: "prof",
    occupation: ["math", "geo"],
    getFunc: function(){
        let msg = "M." + this.name + " teaches ";
        this.occupation.forEach(function(e) {
            msg += e;
        });
        return msg;



    }
}



Object.setPrototypeOf(student, user);
Object.setPrototypeOf(teacher, user);

let members = [student, teacher];

members.forEach(function(e) {
    console.log(e.getFunc()); // for student it exec the default one, from proto
});

//

console.log("name" in student); // check lobject, puis le propto, donc = true
console.log(teacher.hasOwnProperty("active")); // check lobjet seulement, check pas le proto, donc ici = false

//

let properties = [];
for (let prop in teacher){
    properties.push(prop);
}
console.log(properties); // toutes les properties de l'obj + les properties du proto

let propertiesOfObjOnly = [];
for (let prop in teacher){
    if (teacher.hasOwnProperty(prop)) // push only if obj has the prop
        propertiesOfObjOnly.push(prop);
}
console.log(propertiesOfObjOnly); // les properties de l'obj only