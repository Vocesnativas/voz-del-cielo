document.addEventListener("DOMContentLoaded", function () {

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

    const boton = document.getElementById("nuevo-versiculo");
    const texto = document.getElementById("texto-versiculo");
    const referencia = document.getElementById("referencia-versiculo");

    boton.addEventListener("click", function () {

        const numero = Math.floor(Math.random() * versiculos.length);

        texto.textContent = "“" + versiculos[numero].texto + "”";

        referencia.textContent = versiculos[numero].referencia;

    });

});
