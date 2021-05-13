var t = [
    [12,5,65,78,4],
    [01,12,25,88,4,17,18,19,58,98],
    [45,87,965,5,10]
];

outterLoop: for (let i = 0; i < t.length; i++) {
    for (let k = 0; k < t[i].length; k++) {
        console.log(t[i][k]);
        if (t[i][k] === 58) {
            console.log(`Found at: ${i},${k}`);
            break outterLoop;
        }
    }
    console.log('----');
}


/*
t.forEach(function(ligne) {
    console.log(ligne); 
});

t.forEach(function(ligne) {
    ligne.forEach(function(element) {
        console.log(element);
    });
    console.log('*');
});*/