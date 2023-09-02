/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

var radio = prompt("Ingrese radio del circulo:");

var circulo1 = new Circulo(radio);

circulo1.area(radio);
circulo1.perimetro(radio);

function Circulo(radio) {
    this.radio = radio;
    this.area = area;
    this.perimetro = perimetro;
}

function area(radio) {
    alert("El área del círculo es: " + (3.14 * radio * radio));
}

function perimetro(radio) {
    alert("El perímetro del círculo: " + (2 * 3.14 * radio));
}