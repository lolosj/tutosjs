function random_integer_between(x,y) {
    let result;
    result = Math.floor(Math.random() * (y-x) + x);
    return result;
}


var t = [];

for (let i = 0; i < 10; i++){
    t[i] = random_integer_between(5, 15)
}

console.log(t);
t.sort(function(a,b){return a-b});
console.log(t);


