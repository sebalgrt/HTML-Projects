/*Realizar un programa que pida una frase y el programa deberá mostrar la
frase con un  espacio entre cada letra. La frase se mostrara así: H o l a.
Nota: recordar el  funcionamiento de la función Substring().*/

var frase = prompt("Ingrese frase: ");
var frase2 = "";
for (let index = 0; index < frase.length; index++) {
    frase2 += frase.substring(index, index + 1) + " ";
}
alert(frase2);