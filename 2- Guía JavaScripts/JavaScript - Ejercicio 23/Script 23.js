/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo (con un fondo 
amarillo, por ejemplo)*/

let parrafo = document.getElementById("1");
let array = parrafo.textContent.split(" ");

for (let i = 0; i < array.length; i++) {
    if (array[i].length > 8) {
        array[i] = `<em>${array[i]}</em>`;
    }
}

parrafo.innerHTML = array.join(" ");