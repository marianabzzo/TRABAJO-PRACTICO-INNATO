let hamburger = document.getElementById('hamburger');
let navUl = document.querySelector('.navbar');

hamburger.addEventListener('click', ()=> {
    navUl.classList.toggle('show');
})