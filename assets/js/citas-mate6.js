// Frases aleatorias - Matemáticas 6º
const frases = [
    {
        texto: "Las matemáticas son el alfabeto con el que Dios ha escrito el universo.",
        autor: "Galileo Galilei"
    },
    {
        texto: "No te preocupes por tus dificultades en matemáticas; te aseguro que las mías son aún mayores.",
        autor: "Albert Einstein"
    },
    {
        texto: "Equivocarse en matemáticas no significa que eres malo en ellas. Significa que estás aprendiendo.",
        autor: "Claude"
    },
    {
        texto: "La matemática pura es, a su manera, la poesía de las ideas lógicas.",
        autor: "Albert Einstein"
    },
    {
        texto: "Cada problema que resuelves hoy es un superpoder que nadie te puede quitar mañana.",
        autor: "Claude"
    },
    {
        texto: "El que no arriesga un error, nunca descubre nada nuevo.",
        autor: "Louis Pasteur"
    },
    {
        texto: "No naciste sabiendo caminar, tampoco naciste sabiendo matemáticas. Las dos se aprenden paso a paso.",
        autor: "Claude"
    },
    {
        texto: "La matemática no miente. Lo que falla siempre es nuestra comprensión de ella.",
        autor: "María Agnesi"
    },
    {
        texto: "Un número no te puede vencer si tú decides entenderlo.",
        autor: "Claude"
    },
    {
        texto: "La vida es un problema de matemáticas: todo tiene solución si sabes cómo plantearlo.",
        autor: "Claude"
    }
];

function mostrarFraseAleatoria() {
    const indice = Math.floor(Math.random() * frases.length);
    const frase = frases[indice];

    const texto = document.getElementById("cita-texto-mate6");
    const autor = document.getElementById("cita-autor-mate6");

    if (texto && autor) {
        texto.textContent = `"${frase.texto}"`;
        autor.textContent = `${frase.autor}`;
    }
}

document.addEventListener("DOMContentLoaded", mostrarFraseAleatoria);