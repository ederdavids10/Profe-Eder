// ============================================
// CITAS PARA LA PÁGINA DE FÍSICA
// ============================================

const citasFisica = [
    {
        texto: "La imaginación es más importante que el conocimiento.",
        autor: "Albert Einstein"
    },
    {
        texto: "La física no es solo una ciencia, es una forma de ver el universo.",
        autor: "Profe Eder"
    },
    {
        texto: "Lo que va hacia arriba, debe bajar. Pero entender por qué, eso es física.",
        autor: "Profe Eder"
    },
    {
        texto: "Si puedes medirlo, puedes entenderlo. Si puedes entenderlo, puedes dominarlo.",
        autor: "Profe Eder"
    },
    {
        texto: "La naturaleza es el mayor laboratorio que existe.",
        autor: "Marie Curie"
    },
    {
        texto: "La física es la poesía del universo escrita en ecuaciones.",
        autor: "Profe Eder"
    },
    {
        texto: "Dios no juega a los dados con el universo.",
        autor: "Albert Einstein"
    },
    {
        texto: "Cada fuerza tiene una reacción. En la vida y en la física.",
        autor: "Profe Eder"
    },
    {
        texto: "La ciencia no conoce fronteras, porque el conocimiento pertenece a la humanidad.",
        autor: "Louis Pasteur"
    },
    {
        texto: "Entiende las leyes del universo y ningún problema te parecerá imposible.",
        autor: "Profe Eder"
    }
];

function obtenerCitaFisica() {
    const indice = Math.floor(Math.random() * citasFisica.length);
    return citasFisica[indice];
}

function actualizarCitaFisica() {
    const cita = obtenerCitaFisica();
    document.getElementById('cita-texto-fis').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-fis').innerHTML = `${cita.autor}`;
}

let intervaloFis;

function iniciarCambioAutomaticoFis(segundos = 20) {
    if (intervaloFis) clearInterval(intervaloFis);
    intervaloFis = setInterval(actualizarCitaFisica, segundos * 1000);
}

function detenerCambioAutomaticoFis() {
    if (intervaloFis) clearInterval(intervaloFis);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaFisica();
    iniciarCambioAutomaticoFis(20);
});