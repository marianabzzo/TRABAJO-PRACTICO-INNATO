let click = true;

async function getProvincias(){
let response  = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
let data = await response.json()

console.log(data);
}

getProvincias()

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
})


if (click) {
  document.querySelector('p2').classList.add('nombreMiClub');
  }
Swal.fire({
    title: '¿Deseas unirte al Mi Club?' + '¡Genial!',
    text: 'Llena el siguiente formulario',
});