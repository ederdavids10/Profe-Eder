// ============================================
// CITAS PARA LA PÁGINA DE ÉTICA
// ============================================

const citasEtica = [
    {
        texto: "La medida de un hombre no es dónde está en momentos de comodidad, sino dónde se encuentra en tiempos de reto.",
        autor: "Martin Luther King Jr."
    },
    {
        texto: "Actúa de tal manera que tu acción pueda convertirse en ley universal.",
        autor: "Immanuel Kant"
    },
    {
        texto: "Tu carácter es quien eres cuando nadie te está mirando.",
        autor: "Profe Eder"
    },
    {
        texto: "La ética no es una asignatura, es una forma de vivir.",
        autor: "Profe Eder"
    },
    {
        texto: "No hagas a los demás lo que no quieres que te hagan a ti.",
        autor: "Confucio"
    },
    {
        texto: "El mayor poder del ser humano es elegir su actitud ante cualquier circunstancia.",
        autor: "Viktor Frankl"
    },
    {
        texto: "Sé el cambio que quieres ver en el mundo.",
        autor: "Mahatma Gandhi"
    },
    {
        texto: "Una buena decisión tomada a tiempo vale más que mil arrepentimientos.",
        autor: "Profe Eder"
    },
    {
        texto: "La integridad es hacer lo correcto, incluso cuando nadie te lo exige.",
        autor: "Profe Eder"
    },
    {
        texto: "El respeto hacia los demás es el primer paso para construir un mundo mejor.",
        autor: "Profe Eder"
    }
];

function obtenerCitaEtica() {
    const indice = Math.floor(Math.random() * citasEtica.length);
    return citasEtica[indice];
}

function actualizarCitaEtica() {
    const cita = obtenerCitaEtica();
    document.getElementById('cita-texto-eti').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-eti').innerHTML = `${cita.autor}`;
}

let intervaloEti;

function iniciarCambioAutomaticoEti(segundos = 20) {
    if (intervaloEti) clearInterval(intervaloEti);
    intervaloEti = setInterval(actualizarCitaEtica, segundos * 1000);
}

function detenerCambioAutomaticoEti() {
    if (intervaloEti) clearInterval(intervaloEti);
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaEtica();
    iniciarCambioAutomaticoEti(20);
});