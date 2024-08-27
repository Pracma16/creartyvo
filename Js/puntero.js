document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-publicidad');
   

    const robotCursor = document.createElement('div');
    robotCursor.id = 'robot-cursor';
    document.body.appendChild(robotCursor);

    container.addEventListener('mousemove', (e) => {
        createTrail(e.clientX, e.clientY);
        moveRobotCursor(e.clientX, e.clientY);
    });

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        trail.classList.add(Math.random() < 0.5 ? 'purple' : 'orange');
        container.appendChild(trail);
        

        setTimeout(() => {
            trail.remove();
        }, 1000);
    }

    function moveRobotCursor(x, y) {
        robotCursor.style.left = `${x}px`;
        robotCursor.style.top = `${y}px`;
    }
});

 