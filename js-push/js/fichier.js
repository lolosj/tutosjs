var t = [];
while(true) {
    let input = prompt("?");
    if (input === "q" || input === null) {
        break;
    }
    t.push(Number(input));
}

console.log(t);