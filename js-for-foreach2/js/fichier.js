let t = [4, 565, 78, 56, 10];
t.length = 50;
for (let i = 0; i < t.length; i++) {
        console.log(t[i]);
}

for (let i = 0; i < t.length; i++) {
    if (t[i] !== undefined)
        console.log(t[i]);
}

t.forEach(function(){console.log("a");});

t.forEach(function(element, i) {
    console.log(element, i);
});