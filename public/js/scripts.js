
const movementOne = document.getElementById("movimentOne");
const movimentTwo = document.getElementById("movimentTwo");
const movimentthree = document.getElementById("movimentthree");
const movimentFrame = document.getElementById('movimentFrame');
const movimentFive = document.getElementById("movimentFive");
const movimëntSix = document.getElementById("movimëntSix");
const movimëntSeven = document.getElementById("movimentSeven");
const movimentEight = document.getElementById("movimentEight");
const movimentNine = document.getElementById("movimentNine");
const movimentTen = document.getElementById("movimentTen");
const movimenteleven = document.getElementById("movimenteleven");

$(window).scroll(function(){
    const verticalPosition = document.documentElement.scrollTop;
    console.log(verticalPosition);
    if(verticalPosition < 80){
         movementOne.style.marginTop="-80px";
         movimentTwo.style.marginTop="300px";
         movimentthree.style.top="200px";
    } 

    if(verticalPosition < 20){
       movementOne.style.marginTop="10px";
       movimentTwo.style.marginTop="30px";
        movimentthree.style.top="300px";
    }

    if(verticalPosition >= 1559){
         movimentFrame.style.marginTop="-100px";
         movimentFive.style.marginTop="-160px";
         movimëntSix.style.marginTop="50px";
    }
    if(verticalPosition <= 1559){
        movimentFrame.style.marginTop="100px";
        movimentFive.style.marginTop="-10px";
        movimëntSix.style.marginTop="-10px";
    }

    if(verticalPosition >= 2845){
        movimëntSeven.style.marginTop="-80px";
    }
    if(verticalPosition <= 2845){
        movimëntSeven.style.marginTop="80px";
    }

    if(verticalPosition >= 4665){
       movimentEight.style.marginLeft="20px";
       movimentNine.style.marginLeft="100px";
       movimentTen.style.marginLeft="100px";
       movimenteleven.style.marginLeft="100px";
    }
    if(verticalPosition <= 4665){
        movimentEight.style.marginLeft="50px";
        movimentNine.style.marginLeft="30px";
        movimentTen.style.marginLeft="300px";
        movimenteleven.style.marginLeft="30px";
     }
})
