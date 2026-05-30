// ============================================
// CITAS PARA LA PÁGINA DE MATEMÁTICAS
// ============================================

// Lista de citas exclusivas de matemáticas
const citasMatematicas = [
    {
        texto: "Las matemáticas son la ciencia del orden y la medida, de bellas cadenas de razonamiento.",
        autor: "René Descartes"
    },
    {
        texto: "La matemática es el lenguaje en que está escrito el libro de la naturaleza.",
        autor: "Galileo Galilei"
    },
    {
        texto: "Sin matemáticas no hay arte porque no hay belleza sin proporción.",
        autor: "Luca Pacioli"
    },
    {
        texto: "Un número es tan solo una idea; lo poderoso está en lo que puedes hacer con él",
        autor: "Profe Eder"
    },
    {
        texto: "La elegancia de una demostración matemática es la prueba de que la verdad puede ser hermosa.",
        autor: "Bertrand Russell"
    },
    {
        texto: "La matemática es la música de la razón.",
        autor: "James Joseph Sylvester"
    },
    {
        texto: "Las matemáticas son el arma del razonamiento. Úsalas bien y ningún problema te vencerá..",
        autor: "Profe Eder"
    },
    {
        texto: "Dios hizo los números enteros; todo lo demás es obra del hombre.",
        autor: "Leopold Kronecker"
    },
    {
        texto: "Equivocarse en matemáticas no es fallar — es encontrar un camino que no funciona. Ya estás más cerca..",
        autor: "Profe Eder"
    },
    {
        texto: "Cada ecuación que resuelves es un latido más fuerte de tu cerebro.",
        autor: "Profe Eder"
    },
    {
        texto: "Las matemáticas son el arte de dar el mismo nombre a diferentes cosas.",
        autor: "Henri Poincaré"
    },
    {
        texto: "La única manera de aprender matemáticas es haciéndolas.",
        autor: "Paul Halmos"
    },
    {
        texto: "No hay rama de la matemática, por abstracta que sea, que no pueda aplicarse a los fenómenos del mundo real.",
        autor: "Nikolai Lobachevsky"
    },
    {
        texto: "La matemática es la ciencia del orden y la medida, de bellas cadenas de razonamientos.",
        autor: "René Descartes"
    },
    {
        texto: "Las matemáticas son como el amor: una idea simple que puede complicarse fácilmente.",
        autor: "Anónimo"
    }
];

// Función para obtener cita aleatoria
function obtenerCitaMate() {
    const indice = Math.floor(Math.random() * citasMatematicas.length);
    return citasMatematicas[indice];
}

// Función para actualizar la cita en la página
function actualizarCitaMate() {
    const cita = obtenerCitaMate();
    document.getElementById('cita-texto-mate').innerHTML = `&ldquo;${cita.texto}&rdquo;`;
    document.getElementById('cita-autor-mate').innerHTML = `${cita.autor}`;
}

// Función para cambio automático (opcional)
let intervaloMate;

function iniciarCambioAutomaticoMate(segundos = 20) {
    if (intervaloMate) clearInterval(intervaloMate);
    intervaloMate = setInterval(actualizarCitaMate, segundos * 1000);
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarCitaMate();
    iniciarCambioAutomaticoMate(20); // Cambia cada 20 segundos
});