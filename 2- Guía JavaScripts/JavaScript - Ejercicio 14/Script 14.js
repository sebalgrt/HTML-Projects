/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

function libro(isbn, titulo, autor, cantPag) {
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.cantPag = cantPag;
    this.cargar = cargar;
    this.mostrar = mostrar;
}

var libro1 = new libro();
libro1.cargar();
libro1.mostrar();

function cargar() {
    var isbn = prompt("Ingrese ISBN:");
    var titulo = prompt("Ingrese título:");
    var autor = prompt("Ingrese autor");
    var cantPag = prompt("Ingrese cantidad de páginas:");
    var libro1 = libro(isbn, titulo, autor, cantPag);
}

function mostrar() {
    var resp = `ISBN: ${isbn}\nTítulo: ${titulo}\nAutor: ${autor}\nCantidad de páginas: ${cantPag}`;
    alert(resp);
}
