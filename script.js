document.addEventListener("DOMContentLoaded", function () {

    const boton = document.getElementById("nuevo-versiculo");
    const texto = document.getElementById("texto-versiculo");
    const referencia = document.getElementById("referencia-versiculo");

    const versiculos = [
        {
            texto: "“Todo lo puedo en Cristo que me fortalece.”",
            referencia: "Filipenses 4:13"
        },
        {
            texto: "“El Señor es mi pastor; nada me faltará.”",
            referencia: "Salmo 23:1"
        },
        {
            texto: "“No temas, porque yo estoy contigo.”",
            referencia: "Isaías 41:10"
        },
        {
            texto: "“Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.”",
            referencia: "Mateo 11:28"
        },
        {
            texto: "“Confía en el Señor con todo tu corazón.”",
            referencia: "Proverbios 3:5"
        },
        {
            texto: "“El Señor es mi luz y mi salvación; ¿de quién temeré?”",
            referencia: "Salmo 27:1"
        }
    ];

    let indice = 0;

    boton.addEventListener("click", function () {

        indice++;

        if (indice >= versiculos.length) {
            indice = 0;
        }

        texto.textContent = versiculos[indice].texto;
        referencia.textContent = versiculos[indice].referencia;

    });

});
