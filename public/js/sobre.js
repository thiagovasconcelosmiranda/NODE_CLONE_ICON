const circle = document.querySelector('.circle-13');
const circle2 = document.querySelector('#circle-13');

$(window).scroll(function(){
    const verticalPosition = document.documentElement.scrollTop;

    if(verticalPosition > 0){
        circle.style.top='20%';
        circle2.style.top='20%';
    } if(verticalPosition === 0){
        circle.style.top='40%';
        circle2.style.top='40%';
    }
    
});






