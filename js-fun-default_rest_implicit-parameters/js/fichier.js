function pow(x, y){

    let total = 1;

    for (let i = 0; i < y; i++){
        total *= x;
    }
    return total;
        
}

// sinon : if y == undefined { y = 2 }
// ou : y = y === "undefined" ? 2 : y;
function powDefaultParam(x, y = 2){

    let total = 1;

    for (let i = 0; i < y; i++){
        total *= x;
    }
    return total;
        
}

function powExtraParam(x, y, ...extras){

    console.log(extras);
    let total = 1;

    for (let i = 0; i < y; i++){
        total *= x;
    }
    return total;
        
}

function funLargest(x, ...extras){
    let largest = x;
    for (let i = 0; i < extras.length; i++) {
        if (extras[i] > largest)
            largest = extras[i];
    }
    return largest;
}

function funImplicit(x, y, ...extras){
    console.log(this);
    console.log(arguments);
}
console.log(pow(3)); // 1
console.log(powDefaultParam(3)); // 9
console.log(powDefaultParam(3, 2, 5, 7)); 

console.log(powExtraParam(3, 2, 5, 7)); 

console.log(funLargest(1,5,6,42,8,9,4,8));

console.log(this);
funImplicit();

funImplicit(1,2,3);