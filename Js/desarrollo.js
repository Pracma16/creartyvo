// Selección de elementos
const stations = document.querySelectorAll('.station');
const sidePanel = document.getElementById('side-panel');
const panelTitle = document.getElementById('panel-title');
const panelContent = document.getElementById('panel-content');
const panelVideo = document.getElementById('panel-video');
const closePanelBtn = document.getElementById('close-panel');

// Función para abrir el panel lateral con contenido dinámico
function openPanel(station) {
    const title = station.getAttribute('data-title');
    const content = station.getAttribute('data-content');
    const videoSrc = station.getAttribute('data-video');

    panelTitle.textContent = title;
    panelContent.textContent = content;
    panelVideo.src = videoSrc;

    sidePanel.classList.add('active');

    // Reproduce el video automáticamente cuando se abre el panel
    panelVideo.play();
}

// Cerrar el panel lateral
function closePanel() {
    sidePanel.classList.remove('active');
    panelVideo.pause();  // Pausa el video cuando se cierra el panel
    panelVideo.src = ""; // Resetea el src para detener completamente el video
}

// Event listeners para las estaciones
stations.forEach(station => {
    station.addEventListener('click', () => openPanel(station));
});

// Event listener para el botón de cerrar
closePanelBtn.addEventListener('click', closePanel);

// Cerrar el panel al hacer clic fuera de él
document.addEventListener('click', (event) => {
    if (!sidePanel.contains(event.target) && !event.target.closest('.station')) {
        closePanel();
    }
});

// Variables para manejar el deslizamiento en dispositivos móviles
let touchStartX = 0;
let touchEndX = 0;

// Detecta el inicio del deslizamiento
sidePanel.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

// Detecta el final del deslizamiento y cierra el panel si se desliza hacia la izquierda
sidePanel.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    if (touchEndX < touchStartX) { // Desliza hacia la izquierda
        closePanel();
    }
});


