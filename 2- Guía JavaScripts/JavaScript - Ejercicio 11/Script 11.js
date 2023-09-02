/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

let cadena = prompt("Ingrese una frase");
let array = cadena.split(" ");
let comp = "";
for (let i = 0; i < array.length; i++) {
    if (array[i].length > comp.length) {
        comp = array[i];
    }
}
alert(comp);