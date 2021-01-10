let menu = document.querySelector('#menu');
let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let body = document.querySelector('#body');
hamburger.addEventListener('click', function() {
    console.log('click');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('close').classList.toggle('active');
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');

});
close.addEventListener('click', function() {
    console.log('click-yo');
    document.getElementById('close').classList.toggle('active');
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('menu').classList.toggle('active');
    document.getElementById('body').classList.toggle('active');



});