/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.crear = Crear;
}

var personas = new Set;

var cant = prompt("Cuantas personas desea ingreasar?:")

for (let i = 0; i < cant; i++) {
    personas[i] = Crear();
}

for (const aux of personas) {
    console.log(aux);
}

function Crear() {
    var nombre = prompt("Ingrese nombre:");
    var edad = prompt("Ingrese edad:");
    var sexo = prompt("Ingrese sexo:", "H / M / O");
    var peso = prompt("Ingrese peso:");
    var altura = prompt("Ingrese altura");
    var persona = new Persona(nombre, edad, sexo, peso, altura);
    Mostrar(persona);
    personas.add(persona);
}

function Mostrar(p) {
    alert(`Nombre: ${p.nombre}\nEdad: ${p.edad}\nSexo: ${p.sexo}\nPeso: ${p.peso} Kg.\nAltura: ${p.altura} mts.`);
}