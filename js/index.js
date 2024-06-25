//conecto con el archivo json
//fetch('UBICACION - puede ser local o remoto')
fetch('js/resto.json')
//espero respuesta
.then(response => {
  //almacena los datos obtenidos convertidos a json
  return response.json()
})
// cuando devuelve la conversión a un array de objetos podemos comenzar a utilizarlos.
// utilizamos una variable, en ésta oportunidad ocupamos el nombre DATA
.then(data => {
  data.forEach(e=>{
    document.getElementById('restoList').innerHTML +=/*html*/`
    <a href="./menu.html" class="restaurantes flex">
      <div class="img">
        <img src="${e.img.src}" alt="${e.img.alt}" />
        <div class="distancia">${e.dist}</div>
      </div>
      <div class="descripcion">
      <div class="nombre">${e.name}</div>
      <div class="datos">
        <div>${e.ubic}</div>
        <div>${e.time}</div>
      </div>
      <div class="valoracion flex">
        <div class="estrellas flex">
          ${'<span class="icons selected">star</span>'.repeat(e.value.stars)}
          ${'<span class="icons">star</span>'.repeat(5-e.value.stars)}
          <div class="n-resenias">(${e.value.coments})</div>
        </div>
        <div class="costo">
          ${'<span class="icons selected">euro_symbol</span>'.repeat(e.value.cost)}
          ${'<span class="icons">euro_symbol</span>'.repeat(3-e.value.cost)}
        </div>
      </div>
      <div class="puntaje">${e.value.stars}</div>
      </div>
    </a>`
  })
})