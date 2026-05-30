// ============================================
// SISTEMA DE CITAS DINÁMICAS
// ============================================

// Lista de citas y autores
const citas = [
    {
        texto: "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
        autor: "Nelson Mandela"
    },
    {
        texto: "Nunca dejes de aprender, porque la vida nunca deja de enseñar.",
        autor: "Anónimo popular"
    },
    {
        texto: "La imaginación es más importante que el conocimiento. El conocimiento es limitado; la imaginación rodea el mundo.",
        autor: "Albert Einstein"
    },
    {
        texto: "Cada pregunta que te haces es el primer paso hacia el conocimiento. Aquí empezamos a encontrar las respuestas.",
        autor: "Claude IA"
    },
    {
        texto: "Un buen maestro puede inspirar esperanza, encender la imaginación y despertar el amor por aprender.",
        autor: "Brad Henry"
    },
    {
        texto: "No tengas miedo de equivocarte. Los errores son la prueba de que lo estás intentando.",
        autor: "Anónimo"
    },
    {
        texto: "La educación no es llenar un balde, sino encender un fuego.",
        autor: "William Butler Yeats"
    },
    {
        texto: "Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo.",
        autor: "Benjamin Franklin"
    },
    {
        texto: "Aprender sin pensar es tiempo perdido; pensar sin aprender es peligroso.",
        autor: "Confucio"
    },
    {
        texto: "En las matemáticas no hay pobreza ni riqueza, solo soluciones esperando ser encontradas.",
        autor: "Claude IA"
    },
    {
        texto: "Cada ejercicio resuelto es una victoria. Cada duda, una puerta que se abre.",
        autor: "Claude IA"
    },
    {
        texto: "Las matemáticas no son difíciles, solo diferentes. Solo necesitas la llave correcta.",
        autor: "Profe Eder"
    },
    {
        texto: "Un problema bien entendido es un problema medio resuelto.",
        autor: "Anónimo"
    }
];

// Función para obtener una cita aleatoria
function obtenerCitaAleatoria() {
    const indice = Math.floor(Math.random() * citas.length);
    return citas[indice];
}

// Función para actualizar la cita en la página
function actualizarCita() {
    const cita = obtenerCitaAleatoria();
    document.getElementById('cita-texto').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor').innerHTML = ` ${cita.autor}`;
}

// Cambiar cita automáticamente cada 15 segundos (opcional)
let intervaloCambio;

function iniciarCambioAutomatico(segundos = 15) {
    if (intervaloCambio) clearInterval(intervaloCambio);
    intervaloCambio = setInterval(actualizarCita, segundos * 1000);
}

function detenerCambioAutomatico() {
    if (intervaloCambio) clearInterval(intervaloCambio);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCita();
    iniciarCambioAutomatico(15); // Cambia cada 15 segundos
});