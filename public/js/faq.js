const clientButton = document.querySelector('#client');
const notclientButton = document.querySelector('#notclient');

const clientI = document.querySelector('#i-client-x');
const notClientI = document.querySelector('#i-notclient');


clientButton.addEventListener('click', () =>{
    clientI.style.display="none";
    notClientI.style.display="block";
    clientButton.style.backgroundColor="#120a88";
    notclientButton.style.backgroundColor="#fff";
});

notclientButton.addEventListener('click', () =>{
    clientI.style.display="block";
    notClientI.style.display="none";
    clientButton.style.backgroundColor="#fff";
    notclientButton.style.backgroundColor="#120a88";
});