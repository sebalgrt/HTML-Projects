/*18. A partir del siguiente array: 
var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores = [true, 5, false, "hola", "adios", 2];

//a)
var mayor = "";

for (const aux of valores) {
    if (typeof aux == "string") {
        if (aux.length > mayor.length) {
            mayor = aux;
        }
    }
}

alert("El texto mayor es " + mayor);

//b)
for (const aux of valores) {
    if (typeof aux == "boolean") {
        alert(aux);
    }
}

//c)
var num = [];
var i = 0
for (const aux of valores) {
    if (typeof aux == "number") {
        num[i] = aux;
        i++;
    }
}
alert(`${num[0]} + ${num[1]} = ` + (num[0] + num[1]));
alert(`${num[0]} - ${num[1]} = ` + (num[0] - num[1]));
alert(`${num[0]} x ${num[1]} = ` + (num[0] * num[1]));
alert(`${num[0]} / ${num[1]} = ` + (num[0] / num[1]));
alert(`${num[0]} a la ${num[1]} potencia = ` + Math.pow(num[0], num[1]));
