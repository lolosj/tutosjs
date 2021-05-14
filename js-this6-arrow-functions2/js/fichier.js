function cube(x){
    return x*x*x;
}
let cubeArrow = (x) => x*x*x; // equivalent a let cubeArrow = (x) => { return x*x*x; }

console.log(cube(3));
console.log(cubeArrow(3));


let arrowFun = () => this;
function normalFun(){
    return this;
}

console.log(arrowFun());
console.log(normalFun());

let functions = { 
    arrow: arrowFun,
    normal: normalFun
}

console.log("normal, this = "); // this = object functions
console.log(functions.normal());
console.log("arrow, this = "); // this = what is was when we created the function
console.log(functions.arrow()); // so here this = window object