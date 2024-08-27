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
}

// Cerrar el panel lateral
function closePanel() {
    sidePanel.classList.remove('active');
    panelVideo.pause();
    panelVideo.src = "";
}

// Event listeners para las estaciones
stations.forEach(station => {
    station.addEventListener('click', () => openPanel(station));
});

// Event listener para el botón de cerrar
closePanelBtn.addEventListener('click', closePanel);
