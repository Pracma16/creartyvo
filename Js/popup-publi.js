document.getElementById('openPopup').addEventListener('click', function(event) {
    const img = event.target;
    img.classList.add('active'); 

    document.getElementById('popupContainer').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popup').classList.add('open');
    }, 50); 
});

document.getElementById('closePopup').addEventListener('click', function() {
    const activeImg = document.querySelector('.centro-paid-media img.active');
    if (activeImg) {
        activeImg.classList.remove('active'); 
    }
    document.getElementById('popup').classList.remove('open');
    setTimeout(() => {
        document.getElementById('popupContainer').style.display = 'none';
    }, 500);
});

document.getElementById('popupContainer').addEventListener('click', function(event) {
    if (event.target === this) {
        const activeImg = document.querySelector('.centro-paid-media img.active');
        if (activeImg) {
            activeImg.classList.remove('active'); 
        }
        document.getElementById('popup').classList.remove('open');
        setTimeout(() => {
            document.getElementById('popupContainer').style.display = 'none';
        }, 500);
    }
});

