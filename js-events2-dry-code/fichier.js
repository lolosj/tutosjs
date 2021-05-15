var img1 = document.getElementById("img1id");
var img1link = document.getElementById("img1linkid");

var img2 = document.getElementById("img2id");
var img2link = document.getElementById("img2linkid");

var img3 = document.getElementById("img3id");
var img3link = document.getElementById("img3linkid");

// DRY code
img1link.addEventListener("click", function() {
    img1.className = "";

    img2.className = "hide";
    img3.className = "hide";
});

img2link.addEventListener("click", function() {
    img2.className = "";
    
    img1.className = "hide";
    img3.className = "hide";
});

img3link.addEventListener("click", function() {
    img3.className = "";
    
    img1.className = "hide";
    img2.className = "hide";
});
