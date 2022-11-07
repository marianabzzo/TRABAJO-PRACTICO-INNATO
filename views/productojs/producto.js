
console.log("hola")


fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then(response => response.json())
  .then(json => console.log(json))




  // SCROLL UP BUTTON

const scrollBtn = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
})