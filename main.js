alert("Usuario: ranger\nContraseña: 12345678")
document.getElementById("ingresar").addEventListener("click",evento=>{
    evento.preventDefault();

    if(document.getElementById("usuario").value ==="ranger" &&  document.getElementById("con").value ==="12345678")
    {
        alert("Sesion con exito")

        setTimeout(()=>{
            window.location.href="./index2.html"
        },1000)
    }
    else
    {
        error()
    }

})  

document.getElementById("con").addEventListener("mouseenter",(evento)=>{
    evento.target.type ="text";
})

document.getElementById("con").addEventListener("mouseout",(evento)=>{
    evento.target.type ="password";
})

function error()
{
    if (document.getElementById("usuario").value ==="" || document.getElementById("con").value ==="")
    {
        document.getElementById("mensaje").style.display="block"; 

        setTimeout(()=>{
            document.getElementById("mensaje").style.display="none"; 

        },5000)
    }

}

document.getElementById("re").addEventListener("change",()=>{
    if(re.checked)
    {
        alert("Guardaremos tus datos!")
    }
})




