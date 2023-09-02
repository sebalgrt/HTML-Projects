/*10. Escribir una función flecha que reciba una palabra y la
devuelva al revés*/
var pal = prompt("Ingrese una palabra:");

function invertir(pal) {
    let inv = "";
    for (let i = pal.length; i > 0; i--) {
        inv += pal.substring(i - 1, i);
    }
    return inv
}

alert(invertir(pal));
