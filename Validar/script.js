let buscar = document.getElementById("buscar");
buscar.addEventListener("click",validar);

function validar(){
    let animal = document.querySelector(".animal").value;
    
    //Perro, perro, PERRO, PeRrO
    let patron1 = /perro/i;
    let patron2 = /gato/i;
    if(animal.match(patron1) || animal.match(patron2)){
        alert("Palabra ingresada permitada");
    }else{
        alert("Palabra no permitida");
    }

}