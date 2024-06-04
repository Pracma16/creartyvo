
// Texto variante en la portada
const texts = [
    "Hoy es tu momento, escala al siguiente nivel",
    "¿Buscabas un cambio para evolución con la IA?",
    "¿Buscas crecer con estrategias digitales efectivas?",
    "Lleva tu visión al siguiente nivel.",
    "Destacamos tu negocio en el mercado.",
];

let currentIndex = 0;

function changeText() {
    const textContainer = document.getElementById('text-container');
    currentIndex = (currentIndex + 1) % texts.length;
    textContainer.textContent = texts[currentIndex];
}

setInterval(changeText, 8000); // Cambia el texto cada 8 segundos

//codigo video baner fondo

window.addEventListener('load', function() {
    var video = document.getElementById('miVideo');
    video.currentTime = 0;
    video.play();
});