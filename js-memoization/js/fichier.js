pow.calculated  = { };
function pow(x, y){

    let stringInput = x + "^" + y;
    let total = 1;
    if (stringInput in pow.calculated) {
        console.log("No need to calc again !");
        return pow.calculated[stringInput];
    } 

    for (let i = 0; i < y; i++){
        total *= x;
    }
    
    pow.calculated[stringInput] = total;
    console.log(pow.calculated);
    return total;
        
}



console.log(pow(3,3));
console.log(pow(5,5));
console.log(pow(3,3));
console.log(pow(3,3));
console.log(pow(3,3));
console.log(pow(3,3));
