
const navbar = document.querySelector('#navbar');
const ul = document.querySelector('#i');
const option = document.querySelector('#option');

$(window).scroll(function(){
    const verticalPosition = document.documentElement.scrollTop;
    //navbar
    if(verticalPosition > 0){
        navbar.style.height='60px';
    } if(verticalPosition === 0){
        navbar.style.height='90px';
    }
});


option.addEventListener('click', () => {
    if(ul.classList.contains("option-x")){
        ul.classList.remove('option-x');
    }else{
        ul.classList.add('option-x');
    } 
    
 });




