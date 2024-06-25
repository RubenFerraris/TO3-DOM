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
    if(e.id==1){
      e.menu.forEach(m=>{
        document.getElementById('options').innerHTML +=/*html*/`
        <a href="./saucer.html" class="card flex">
          <div class="card-img">
            <div class="card-price">${m.price}</div>
          </div>
          <div class="card-info">
            <h3 class="card-name">${m.name}</h3>
            <h3 class="card-desc">${m.desc}</h3>
          </div>
        </a>`
      })
    }
  })
})