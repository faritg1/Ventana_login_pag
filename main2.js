const pedir = document.querySelector("#pedir")
const modall = document.querySelector("#modall")
const lista = document.querySelector("#lista")
const cancelar = document.querySelector("#cancelar")
const volver = document.querySelector("#volver")
const aceptar = document.querySelector("#aceptar")
const modalproducto = document.querySelector("#modalproducto")
const modal2 = document.querySelector("#modal2")


pedir.addEventListener("click",()=>{
    if(lista.selectedIndex === 0)
    {
        alert("no hay nada")
    }
    else
    {
        modall.style.top=0
        modalproducto.innerText=lista.options[lista.selectedIndex].text
    }

})

cancelar.addEventListener("click",()=>{
    modall.style.top="-100vh"
    lista.selectedIndex="0"
});


aceptar.addEventListener("click",()=>{
    modal2.style.top=0
})

volver.addEventListener("click",()=>{
    modal2.style.top="-200vh"
});


