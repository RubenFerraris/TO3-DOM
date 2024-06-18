let cantidad=  document.getElementById("cantidad")
let cant=1
let btnrestar=document.getElementById("restar")
let btnsumar=document.getElementById("sumar")
let subTotal=document.getElementById("subtotal")
let price=document.getElementById("precio")
let precio=parseFloat(price.innerText)
let precio1=precio
function restar(){
    if(cant>1){
        btnrestar.innerText="remove"
        btnsumar.innerText="add"
    cant=cant-1
    cantidad.innerText= cant
    precio1=precio1-precio
    price.innerText=precio1.toString()
    }else{
        btnrestar.innerText="block"
        btnrestar.style.color="gray"
        alert("vas a pedir 0 en serio?")
    }
}
function sumar(){
    if(cant<15){
        btnrestar.innerText="remove"
        btnsumar.innerText="add"
        cant=cant+1
        cantidad.innerText= cant
        precio1=precio1+precio
        price.innerText=precio1.toString()
      
    }else{
        btnsumar.innerText="block"
        btnsumar.style.color="gray"
        alert("vas a pedir 15 en serio?")
    }
}