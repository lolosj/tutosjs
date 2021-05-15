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

