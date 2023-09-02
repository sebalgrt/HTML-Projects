/*8. Escribir un programa que lea números enteros
 hasta teclear 0 (cero). Al finalizar el  programa se debe
 mostrar el máximo número ingresado, el mínimo, y el promedio de
 todos ellos.*/
 var suma = 0;
 var min = 0;
 var max = 0;
 var cont = 0;
 var num = 0;
 do {
    num = Number(prompt("Ingrese un número:"));
    suma += num;
    if (num > max) {
        max = num;
    } else if (num < max) {
        min = num;
    }
    cont++;
 } while (num != 0);
 alert(`La suma es ${suma}\nEl mínimo es ${min}\nEl máximo es ${max}\nEl promedio es ` + suma / cont);
