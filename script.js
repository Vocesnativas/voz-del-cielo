/* =========================================================
   VOZ DEL CIELO EN TIEMPOS DIFÍCILES
   FUNCIONES PRINCIPALES
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       VERSÍCULOS DEL DÍA
    ===================================================== */

    const versiculos = [
        {
            texto: "Tu palabra es una lámpara a mis pies, y una luz en mi camino.",
            referencia: "Salmo 119:105"
        },

        {
            texto: "Todo lo puedo en Cristo que me fortalece.",
            referencia: "Filipenses 4:13"
        },

        {
            texto: "El Señor es mi pastor; nada me faltará.",
            referencia: "Salmo 23:1"
        },

        {
            texto: "No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios.",
            referencia: "Isaías 41:10"
        },

        {
            texto: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.",
            referencia: "Mateo 11:28"
        },

        {
            texto: "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.",
            referencia: "Proverbios 3:5"
        },

        {
            texto: "Jehová es mi luz y mi salvación; ¿de quién temeré?",
            referencia: "Salmo 27:1"
        },

        {
            texto: "Dios es nuestro amparo y nuestra fuerza, nuestra ayuda segura en momentos de angustia.",
            referencia: "Salmo 46:1"
        },

        {
            texto: "Echa sobre Jehová tu carga, y él te sustentará.",
            referencia: "Salmo 55:22"
        },

        {
            texto: "El Señor te bendiga y te guarde.",
            referencia: "Números 6:24"
        }
    ];


    /* =====================================================
       ELEMENTOS DEL VERSÍCULO
    ===================================================== */

    const boton = document.getElementById("nuevo-versiculo");
    const texto = document.getElementById("texto-versiculo");
    const referencia = document.getElementById("referencia-versiculo");


    /* =====================================================
       CAMBIAR VERSÍCULO
    ===================================================== */

    if (boton && texto && referencia) {

        let versiculoActual = 0;

        boton.addEventListener("click", function () {

            let nuevoNumero;

            do {
                nuevoNumero = Math.floor(
                    Math.random() * versiculos.length
                );
            } while (
                nuevoNumero === versiculoActual &&
                versiculos.length > 1
            );

            versiculoActual = nuevoNumero;

            texto.textContent =
                "“" + versiculos[nuevoNumero].texto + "”";

            referencia.textContent =
                versiculos[nuevoNumero].referencia;

        });
    }


    /* =====================================================
       MENSAJE DE CONFIRMACIÓN
       AL HACER CLIC EN "QUIERO APOYAR"
    ===================================================== */

    const botonDonacion =
        document.querySelector(".btn-donacion");

    if (botonDonacion) {

        botonDonacion.addEventListener("click", function (evento) {

            evento.preventDefault();

            alert(
                "Gracias por querer apoyar Voz del Cielo. " +
                "Próximamente encontrarás aquí las opciones de donación."
            );

        });
    }

});
