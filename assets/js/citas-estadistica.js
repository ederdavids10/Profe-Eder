// ============================================
// CITAS PARA LA PÁGINA DE ESTADÍSTICA
// ============================================

const citasEstadistica = [
    {
        texto: "Los datos no mienten. Quien sabe leerlos, tiene el poder.",
        autor: "Profe Eder"
    },
    {
        texto: "La estadística es la gramática de la ciencia.",
        autor: "Karl Pearson"
    },
    {
        texto: "Sin datos, solo eres otra persona con una opinión.",
        autor: "W. Edwards Deming"
    },
    {
        texto: "Un buen estadístico no adivina el futuro, lo calcula.",
        autor: "Profe Eder"
    },
    {
        texto: "Torture los datos suficientemente y confesarán cualquier cosa.",
        autor: "Ronald Coase"
    },
    {
        texto: "Los números tienen una historia que contar. Solo necesitas aprender su idioma.",
        autor: "Profe Eder"
    },
    {
        texto: "La probabilidad no es una suposición, es una ciencia.",
        autor: "Profe Eder"
    },
    {
        texto: "En un mundo lleno de información, quien analiza bien, gana siempre.",
        autor: "Profe Eder"
    },
    {
        texto: "La estadística es el arte de aprender de los datos.",
        autor: "David Hand"
    },
    {
        texto: "No temas a los números. Quien los comprende, comprende el mundo.",
        autor: "Profe Eder"
    }
];

function obtenerCitaEstadistica() {
    const indice = Math.floor(Math.random() * citasEstadistica.length);
    return citasEstadistica[indice];
}

function actualizarCitaEstadistica() {
    const cita = obtenerCitaEstadistica();
    document.getElementById('cita-texto-est').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-est').innerHTML = `${cita.autor}`;
}

let intervaloEst;

function iniciarCambioAutomaticoEst(segundos = 20) {
    if (intervaloEst) clearInterval(intervaloEst);
    intervaloEst = setInterval(actualizarCitaEstadistica, segundos * 1000);
}

function detenerCambioAutomaticoEst() {
    if (intervaloEst) clearInterval(intervaloEst);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaEstadistica();
    iniciarCambioAutomaticoEst(20);
});