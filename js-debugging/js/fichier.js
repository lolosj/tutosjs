function fact(x){
    if (x == 0 || x == 1)
        return 1;
    let total = 1;
    for (i = x; i >= 1; i--){
        total *= i;
    }
    return total;
}

function factWithBug(x){
    if (x == 0 || x == 1)
        return 1;
    let total = 1;
    for (i = x - 1; i > 1; i--){
        total = total * i;
        
    }
    return total;
}


console.log(fact(5));//120
console.log(factWithBug(5));// 24