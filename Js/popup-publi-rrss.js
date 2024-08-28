document.getElementById('openPopupRrss').addEventListener('click', function(event) {
    const img = event.target;
    img.classList.add('active'); 

    document.getElementById('popupContainerRrss').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popupRrss').classList.add('open');
    }, 50); 
});

document.getElementById('closePopupRrss').addEventListener('click', function() {
    const activeImg = document.querySelector('.centro-rrss img.active');
    if (activeImg) {
        activeImg.classList.remove('active'); 
    }
    document.getElementById('popupRrss').classList.remove('open');
    setTimeout(() => {
        document.getElementById('popupContainerRrss').style.display = 'none';
    }, 500); 
});

document.getElementById('popupContainerRrss').addEventListener('click', function(event) {
    if (event.target === this) {
        const activeImg = document.querySelector('.centro-rrss img.active');
        if (activeImg) {
            activeImg.classList.remove('active'); 
        }
        document.getElementById('popupRrss').classList.remove('open');
        setTimeout(() => {
            document.getElementById('popupContainerRrss').style.display = 'none';
        }, 500);
    }
});




