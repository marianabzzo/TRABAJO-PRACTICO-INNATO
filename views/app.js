let comprar = confirm("¿Deseas unirte al Mi Club?")

let click = true;

const fetchForm = (provincia) => {
  return fetch ('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre${provincia}')
  .then (Response => Response.json())
  .catch (error => console.log (error))
}

const $form = document.querySelector('form');
const $input = document.querySelector('#input');
const $submit = document.querySelector('#submit');
const $results = document.querySelector('#results');

$form.addEventListener('submit', async function(event){
  event.preventDefault();
  const {valor} = $input;

  if(!valor)return

  $submit.setAttribute('disabled', '');

  let dataFetcthForm = await fetchForm (valor);

  if (dataFetcthForm){
  $results.innerHTML = JSON.stringify(dataFetcthForm, null,2);
  }

  $submit.removeAttribute('disabled'); 
})




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
 