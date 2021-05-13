let t = [4,7,98,4,3,78,8,3,2,65];
t.length = 50;


let max = 0, indexofMax = -1;
for (let i = 0; i < t.length; i++){
    if(t[i] > max){
        max = t[i];
        indexOfMax = i;
    }    
}

console.log(`${max} at index ${indexOfMax}`);