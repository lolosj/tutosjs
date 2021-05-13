function ask_password(n) {
    var password = prompt(`password ? (${n})`);
    return password;
}

var password;
var nth_tentative = 0;
do {
    nth_tentative++;
    password = ask_password(nth_tentative);
} while(password != "lolo" && nth_tentative < 5);
if (nth_tentative == 5)
    console.log("5 tentatives !");
else 
    console.log("LOLO !");
