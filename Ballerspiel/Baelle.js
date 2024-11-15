document.getElementById("ball1").addEventListener("click", changePicture);
document.getElementById("ball2").addEventListener("click", changePicture);
document.getElementById("ball3").addEventListener("click", changePicture);
document.getElementById("ball4").addEventListener("click", changePicture);

function changePicture(e) {  

    var bild = e.target;
    
    if (bild.src.indexOf("images/ball.png") > -1) { 
        bild.src = "images/kreuz.png";
    }

    else if (bild.src.indexOf("images/kreuz.png") > -1) {
        bild.remove();
    }

    var remainingPictures = document.querySelectorAll("img");
    var ImageCount = remainingPictures.length;

    if (ImageCount === 0){
        document.getElementById("gameover").innerText = "GAME OVER";
    }
        
}