let enviar = document.getElementById("enviar");
enviar.addEventListener("click",validar);

function validar(){
    let lugar = document.querySelector(".lugar").value;
    let permitido = /^[a-zA-Z]+$/;

    if(lugar.match(permitido)){
        alert("El texto ingresado es permitido");
    }else{
        alert("El texto ingresado NO es permitido");
    }
}