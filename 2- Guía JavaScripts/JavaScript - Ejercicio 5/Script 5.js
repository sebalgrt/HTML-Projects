/*Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

var num1 = 10;
var num2 = 2;
do {
    var op = prompt("Ingrese que operación desa realizar (S, R, M ó D)\n(Presione * para salir)").toUpperCase();
    switch (op) {
        case "S":
            alert("El resultado es " + (num1 + num2));
            break;
        case "R":
            alert("El resultado es " + (num1 - num2));
            break;
        case "M":
            alert("El resultado es " + (num1 * num2));
            break;
        case "D":
            alert("El resultado es " + (num1 / num2));
            break;
        case "*":
            alert("Adiós!");
            break;
        default: alert("La operación indicada no es correcta");
            break;
    }
} while (op != "*");



