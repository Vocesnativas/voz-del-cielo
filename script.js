document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("nuevo-versiculo");

    if (!boton) {
        alert("NO ENCUENTRO EL BOTÓN");
        return;
    }

    boton.addEventListener("click", function () {
        alert("¡EL BOTÓN FUNCIONA!");
    });

});
