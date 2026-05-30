// ============================================
// CITAS PARA LA PÁGINA DE GEOMETRÍA
// ============================================

// Lista de citas exclusivas de geometría
const citasGeometria = [
    {
        texto: "La geometría es el arte de razonar correctamente sobre figuras mal dibujadas.",
        autor: "Henri Poincaré"
    },
    {
        texto: "Que no entre aquí nadie que no sepa geometría.",
        autor: "Platón (inscripción en su Academia)"
    },
    {
        texto: "Las líneas, los ángulos y las figuras no son solo formas — son el lenguaje con que el universo se organiza.",
        autor: "Profe Eder"
    },
    {
        texto: "La geometría es la ciencia correcta del espacio.",
        autor: "Hermann Weyl"
    },
    {
        texto: "En geometría no hay premios para el que adivina; los hay para el que demuestra.",
        autor: "Profe Eder"
    },
    {
        texto: "El punto, la línea y el plano son los átomos del universo visual.",
        autor: "Paul Klee"
    },
    {
        texto: "La geometría existe en todas partes: en una tela de araña, en un panal de abejas, en el horizonte que ves cada mañana.",
        autor: "Profe Eder"
    },
    {
        texto: "La naturaleza es un libro escrito en lenguaje geométrico.",
        autor: "Galileo Galilei"
    },
    {
        texto: "Las formas geométricas son la poesía del espacio.",
        autor: "Sophie Germain"
    },
    {
        texto: "Todo problema geométrico tiene una solución. A veces solo necesitas cambiar el ángulo desde donde lo miras.",
        autor: "Profe Eder"
    }
];

// Función para obtener cita aleatoria
function obtenerCitaGeometria() {
    const indice = Math.floor(Math.random() * citasGeometria.length);
    return citasGeometria[indice];
}

// Función para actualizar la cita en la página
function actualizarCitaGeometria() {
    const cita = obtenerCitaGeometria();
    document.getElementById('cita-texto-geo').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-geo').innerHTML = `${cita.autor}`;
}

// Cambio automático cada 20 segundos (opcional)
let intervaloGeo;

function iniciarCambioAutomaticoGeo(segundos = 20) {
    if (intervaloGeo) clearInterval(intervaloGeo);
    intervaloGeo = setInterval(actualizarCitaGeometria, segundos * 1000);
}

// Detener cambio automático
function detenerCambioAutomaticoGeo() {
    if (intervaloGeo) clearInterval(intervaloGeo);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaGeometria();
    iniciarCambioAutomaticoGeo(20); // Cambia cada 20 segundos
});