/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

var arrayA = new Array();
var arrayB = new Array();

for (let i = 0; i < 50; i++) {
    arrayA[i] = (Math.random() * 100.).toFixed(2);
}

console.log(arrayA);

/*function comparadorNumerico(a, b) {   ----> ESTA FUNCION QUE ESTA EN LA GUIA NO SIRVE PARA REALES
    if (a > b) return 1;                ----> EJ: ORDENA 22.07, 3.05, 31.02...
    if (a == b) return 0;               ----> NO ES CORRECTO
    if (a < b) return -1;
}*/

arrayA.sort(function(a, b){return a - b}); //----> ESTA FUNCION SI ES CORRECTA

console.log(arrayA);

arrayB = arrayA.slice(0, 10);

for (let i = 10; i < 20; i++) {
    arrayB[i] = 0.5;
}

console.log(arrayB);