let comprar = confirm("¿Deseas unirte al Mi Club?")

console.log(window.document)
console.log(document.querySelector('h1'))
document.querySelector('h1').style.color = 'gray';
document.querySelector('h1').style.backgroundColor = 'lightblue';
document.querySelector('h1').style.textAlign = "center";
console.log(document.querySelector('p'))
document.querySelector('p').style.color = 'dark blue';
document.querySelector('p').style.background = 'lightgray';
console.log(document.querySelector('p2'))
document.querySelector('p2').style.color = 'pink';
document.querySelector('p2').style.backgroundColor = 'gray';
document.querySelector('p2').style.textAlign = 'center';

let click = true;

if (click) {
  document.querySelector('p2').classList.add('nombreMiClub');
}
Swal.fire({
    title: '¡Genial!',
    text: 'Llena el siguiente formulario',
    imageUrl: 'C:\Users\pc\Desktop\Codo a Codo\trabajo grupal\TRABAJO-PRACTICO-INNATO\views\imagenes\LOGO.png',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
 