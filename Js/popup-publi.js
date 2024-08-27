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


//---------------------------------------------------------------------------------------

// document.getElementById('openPopup').addEventListener('click', function() {
//     document.getElementById('modal').style.display = 'flex';
//     showFrame(1);
// });

// document.getElementById('closePopup').addEventListener('click', function() {
//     document.getElementById('modal').style.display = 'none';
// });



// let currentFrame = 1;
// const totalFrames = 5;

// function showFrame(frameNumber) {
//     document.querySelectorAll('.comic-frame').forEach(frame => {
//         frame.classList.remove('active');
//     });
//     document.getElementById(`frame${frameNumber}`).classList.add('active');
// }

// document.getElementById('leftButton').addEventListener('click', function() {
//     if (currentFrame > 1) {
//         currentFrame--;
//         showFrame(currentFrame);
//     }
// });

// document.getElementById('rightButton').addEventListener('click', function() {
//     if (currentFrame < totalFrames) {
//         currentFrame++;
//         showFrame(currentFrame);
//     }
// });




