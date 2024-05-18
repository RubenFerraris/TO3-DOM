// let comida  = document.getElementById("comida");
// console.log(comida.innerText);

// let titulo  = document.querySelector("body");
// console.log(titulo);

// //# Para un ID
// let titulo2  = document.querySelector("#comida");
// console.log(titulo2);

// //. Para una clase
// let empanadas  = document.querySelector(".empanadas");
// console.log(empanadas);

// let lista  = document.querySelectorAll("li");
// console.log(lista);

// let clase_empanadas  = document.getElementsByClassName("empanadas");
// console.log(clase_empanadas[0]);
//Innertext trae texto

let listaElementos = document.querySelectorAll("ul > h2");


console.log(listaElementos);
listaElementos.forEach((elemento) => {
    console.log(elemento);
});

let listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);
//creamos elemento li mediante el metodo //
let listaElemento1 = document.createElement("li");
//le asignamos texto al li cerado mediante //
listaElemento1.textContent = "Es gratis";
listaDesordenada.appendChild(listaElemento1);
//agrego el elemento dentro del nodo
let listaElemento2 = document.createElement("li");
listaElemento2.textContent = "Es impresionante";
listaDesordenada.appendChild(listaElemento2);
function borrar(){
    listaDesordenada.removeChild(listaElemento2);
}
// ACA COMENZAMOS CON EL ARCHIVO 3 
let cambioh1=document.querySelector("h1");
// LO NSOBRE ESCRIBE SINO TIENE IMPORTANT
//cambioh1.style.fontSize = "50px";
//cambioh1.style.color = "blue"
cambioh1.classList.add("empanada")

//el toggle le saca o le agrega la clase si el elemento en 
//la estructura del html tiene <h1 class="iconos"></h1>se lo
//va a remover y si la estructura inicial es 
//<h1>pipipi</h1>,classList.toogle agregara la clase icono