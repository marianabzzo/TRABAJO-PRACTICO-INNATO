let click = true;

//async function getProvincias(){
//let response  = await fetch('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
//let data = await response.json()

//console.log(data);
//}

//getProvincias()

//const $form = document.querySelector('form');
//const $input = document.querySelector('#input');
//const $submit = document.querySelector('#submit');
//const $results = document.querySelector('#results');

//$form.addEventListener('submit', async function(event){
 // event.preventDefault();
 // const {valor} = $input;

  //if(!valor)return

  //$submit.setAttribute('disabled', '');

  //let dataFetcthForm = await fetchForm (valor);

  //if (dataFetcthForm){
  //$results.innerHTML = JSON.stringify(dataFetcthForm, null,2);
 // }
//})


//if (click) {
 // document.querySelector('p2').classList.add('nombreMiClub');
  //}


  const selectMenu = document.querySelector('#provincias');
  const apiGob = async () => {
     await fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then (res => res.json())
      .then(data => { 
      let output = '';
      data.provincias.forEach(provincia => {
      output += `<option>${provincia.nombre}</option>`;
          console.log(provincia.nombre);
      })
      selectMenu.innerHTML = output;
      // getInput();
      
      })
      .catch(err => console.log(err))    
  
      rel();
  }
  
  apiGob();
  
  let rel = function selected(){
      const selected = selectMenu.addEventListener('change', () =>{
          let result = selectMenu.options[selectMenu.selectedIndex].value;
          console.log(result)
          return result
      });
      
  }  
  Swal.fire({
    title: '¿Deseas unirte al Mi Club?' + '¡Genial!',
    text: 'Llena el siguiente formulario',
});