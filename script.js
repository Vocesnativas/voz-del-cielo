// ========================================
// VOZ DEL CIELO EN TIEMPOS DIFÍCILES
// FUNCIONES PRINCIPALES
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("✝️ Voz del Cielo está funcionando.");

    // ========================================
    // VERSÍCULOS
    // ========================================

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
        }
    ];

    // ========================================
    // ELEMENTOS DEL HTML
    // ========================================

    const textoVersiculo = document.getElementById("texto-versiculo");
    const referenciaVersiculo = document.getElementById("referencia-versiculo");
    const botonVersiculo = document.getElementById("nuevo-versiculo");

    // ========================================
    // CAMBIAR VERSÍCULO
    // ========================================

    if (botonVersiculo && textoVersiculo && referenciaVersiculo) {

        botonVersiculo.addEventListener("click", function () {

            const numero = Math.floor(Math.random() * versiculos.length);

            textoVersiculo.textContent =
                "“" + versiculos[numero].texto + "”";

            referenciaVersiculo.textContent =
                versiculos[numero].referencia;

        });

    }

});
