/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación 
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

lim = Number(prompt("Ingrese un valor límite:"));
suma = 0
do {
    num = Number(prompt("Ingrese número a sumar:"));
    suma = suma + num;
    /*alert(suma);*/
} while (suma < lim);