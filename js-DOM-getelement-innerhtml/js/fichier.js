function random_integer_between(x,y) {
    let result;
    result = Math.floor(Math.random() * (y-x) + x);
    return result;
}

function sortAlf() {
    t.sort();
    document.getElementById("liste").innerHTML = t;
  }
  
  
function sortNum() {
    t.sort(function(a, b){return a - b});
    document.getElementById("liste").innerHTML = t;
  }

function newList() {
    for (let i = 0; i < 10; i++){
        t[i] = random_integer_between(5, 15)
    }
    document.getElementById("liste").innerHTML = t;  
        
}



var t = [];




