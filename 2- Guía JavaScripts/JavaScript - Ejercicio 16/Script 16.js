/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

let vector1 = new Array();
let vector2 = new Array();

for (let i = 0; i < 5; i++) {
    vector1[i] = Math.ceil(Math.random() * 10);
    vector2[i] = Math.ceil(Math.random() * 10);
}

vector1.forEach(mostrarArray);
vector2.forEach(mostrarArray);

function mostrarArray(elemento, i, array) {
    console.log(array);
    console.log("[" + i + "] = " + elemento);
}


