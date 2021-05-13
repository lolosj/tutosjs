var dest = document.getElementById("destination");
for(let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i,j);
        dest.append(`${i},${j}`);
        dest.appendChild(document.createElement("br"));
    }
}


//var br = document.createElement("br");


for(let i = 0; i < 10; i++) {
    dest.append(`${i}`);
    for (let j = 9; j > i; j--) {
        dest.append(`,${j}`);
    }
    dest.appendChild(document.createElement("br"));
 
}
