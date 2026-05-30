// ============================================
// CITAS PARA LA PÁGINA DE RELIGIÓN
// ============================================

const citasReligion = [
    {
        texto: "La fe no elimina las preguntas, pero las llena de esperanza.",
        autor: "Profe Eder"
    },
    {
        texto: "Conocerse a sí mismo es el principio de toda sabiduría.",
        autor: "Aristóteles"
    },
    {
        texto: "La religión es la búsqueda del ser humano por encontrar sentido a su existencia.",
        autor: "Profe Eder"
    },
    {
        texto: "No importa a qué dios reces, lo que importa es cómo tratas a las personas.",
        autor: "Profe Eder"
    },
    {
        texto: "El silencio interior es donde habita la verdadera sabiduría.",
        autor: "Profe Eder"
    },
    {
        texto: "La ciencia sin religión está coja; la religión sin ciencia está ciega.",
        autor: "Albert Einstein"
    },
    {
        texto: "Donde hay amor, hay Dios.",
        autor: "León Tolstói"
    },
    {
        texto: "La espiritualidad no es escapar del mundo, sino aprender a vivirlo con profundidad.",
        autor: "Profe Eder"
    },
    {
        texto: "El ser humano que no reflexiona sobre su existencia, vive a medias.",
        autor: "Profe Eder"
    },
    {
        texto: "Todas las tradiciones espirituales del mundo comparten un mismo sueño: la paz.",
        autor: "Profe Eder"
    }
];

function obtenerCitaReligion() {
    const indice = Math.floor(Math.random() * citasReligion.length);
    return citasReligion[indice];
}

function actualizarCitaReligion() {
    const cita = obtenerCitaReligion();
    document.getElementById('cita-texto-rel').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-rel').innerHTML = `${cita.autor}`;
}

let intervaloRel;

function iniciarCambioAutomaticoRel(segundos = 20) {
    if (intervaloRel) clearInterval(intervaloRel);
    intervaloRel = setInterval(actualizarCitaReligion, segundos * 1000);
}

function detenerCambioAutomaticoRel() {
    if (intervaloRel) clearInterval(intervaloRel);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaReligion();
    iniciarCambioAutomaticoRel(20);
});