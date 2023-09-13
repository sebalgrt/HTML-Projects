/*25. Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.*/

function getFormValores() {
    // Obtén el formulario por su ID
    let formulario = document.getElementById("form1");

    // Obtén los elementos de entrada por su nombre
    let nombreInput = formulario.elements["nombre"];
    let apellidoInput = formulario.elements["apellido"];

    // Obtiene los valores de Nombre y Apellido
    let nombre = nombreInput.value;
    let apellido = apellidoInput.value;

    // Puedes hacer lo que quieras con estos valores, como mostrarlos en la consola o en un alert
    alert(`Nombre: ${nombre}\nApellido: ${apellido}`);

    // Evita que el formulario se envíe (si no quieres que la página se recargue)
    //return false;
}
