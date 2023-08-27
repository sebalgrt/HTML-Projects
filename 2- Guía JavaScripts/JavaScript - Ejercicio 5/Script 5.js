/*Construir un programa que simule un menú de opciones para realizar las cuatro 
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores 
numéricos enteros. El usuario, además, debe especificar la operación con el primer 
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’ 
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

var num1 = 10;
var num2 = 2;
var op = prompt("Ingrese que operación desa realizar (S, R, M ó D)");
var res = 0;
switch (op) {
    case 'S': 
        res = num1 + num2;
        break;
    case 'R': 
        res = num1 - num2;
        break;
    case 'M': 
        res = num1 * num2;
        break;
    case 'D': 
        res = num1 / num2;
        break;
    default: alert("La operación indicada no es correcta");
        break;
}
if (res != 0) {
    alert("El resultado es " + res);    
}
