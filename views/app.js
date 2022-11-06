let comprar = confirm("¿Deseas unirte al Mi Club?")

let click = true;

const aplicacion = document.querySelector ('.container1')
const url = 'https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre'

fetch(url)
.then(Response => Response.json())
.then(function (provincias) {
  provincias.forEach(function(provincia) {
    const p = document.createElement('p');
    p.innerHTML = provincia.nombre;
    aplicacion.appendChild(p);
  });

})   
.catch(err => console.log(err))




if (click) {
  document.querySelector('p2').classList.add('nombreMiClub');
  }
Swal.fire({
    title: '¡Genial!',
    text: 'Llena el siguiente formulario',
});