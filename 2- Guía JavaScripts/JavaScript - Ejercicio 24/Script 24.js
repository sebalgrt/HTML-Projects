/*24. Escribir un programa de JavaScript que a través de un formulario calcule el radio de un 
circulo y lo muestre en el HTML*/

let input = document.getElementById("1");
let boton = document.getElementById("btn");
let output = document.getElementById("2");

boton.onclick = function () {
    let radio = input.value / 6.28;
    output.value = radio    
}

