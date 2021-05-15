var img1 = document.getElementById("img1id");
var img1link = document.getElementById("img1linkid");

var img2 = document.getElementById("img2id");
var img2link = document.getElementById("img2linkid");

var img3 = document.getElementById("img3id");
var img3link = document.getElementById("img3linkid");

// DRY code
img1link.addEventListener("click", displayImg);

img2link.addEventListener("click", displayImg);

img3link.addEventListener("click", displayImg);

function displayImg(){
    
    var img, dataImgCorrespondante;
    var listOfImages = document.getElementsByTagName('img');//.forEach(element => { element.className = "hide"; });
    
    for (var i = 0; i < listOfImages.length ; i++) {
        listOfImages[i].className = "hide";
    }
    
    dataImgCorrespondante = (this.attributes["data-imgcorrespondante"].value); // this.attributes["data-imgcorrespondante"] == data-imgcorrespondate="..."
    dataImgCorrespondante += "id" // on concat img1 et id pour img1id

    img = document.getElementById(dataImgCorrespondante);
    img.className = "";

        
}