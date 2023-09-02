/*13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript*/
var nombre = prompt("Ingrese el nombre:");
var edad = prompt("Ingrese edad:");
var sexo = "";
do {
    var op = prompt("Ingrese sexo", "H, M, O").toUpperCase;
    switch (op) {
        case "H":
            sexo = "Hombre";
            break;
        case "M":
            sexo = "Mujer";
            break;
        case "O":
            sexo = "Otro";
            break;
        default: alert("Letra incorrecta");
            op = ñ
            break;
    }
} while (op != ñ);
var peso = prompt("Ingrese peso:");
var altura = prompt("Ingrese altura");

function Persona(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
}

var nuevaPersona = new Persona(nombre, edad, sexo, peso, altura);

alert(`${nuevaPersona.nombre}\n${edad} años\n${sexo}\n${peso}Kg\n${altura}mts`);