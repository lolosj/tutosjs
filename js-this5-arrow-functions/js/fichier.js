
let func1 = (x) => x*x;
function func2(x){
    return x*x
}
let func3 = (x) => { return x*x }; // same


console.log(func1(3));
console.log(func2(3));
console.log(func3(3));
