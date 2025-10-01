// --- LOADING SCREEN SCRIPT START ---
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    const music = document.getElementById('background-music');
    const vinylRecord = document.getElementById('vinyl-record');

    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            if (music) {
                music.play().catch(error => {
                    console.log("Autoplay ditolak oleh browser:", error);
                });
                vinylRecord.classList.add('playing');
                updatePlayPauseIcon(true);
            }
        }, 3000);
    }
});
// --- LOADING SCREEN SCRIPT END ---


// --- VINYL PLAYER SCRIPT START ---
const music = document.getElementById('background-music');
const playPauseBtn = document.getElementById('playPauseBtn');
const vinylRecord = document.getElementById('vinyl-record');

const updatePlayPauseIcon = (isPlaying) => {
    if (!playPauseBtn) return;
    const playIcon = playPauseBtn.querySelector('.icon-play');
    const pauseIcon = playPauseBtn.querySelector('.icon-pause');
    if (isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
};

if (playPauseBtn && music && vinylRecord) {
    playPauseBtn.addEventListener('click', () => {
        const isPlaying = !music.paused;
        if (isPlaying) {
            music.pause();
            vinylRecord.classList.remove('playing');
            updatePlayPauseIcon(false);
        } else {
            music.play();
            vinylRecord.classList.add('playing');
            updatePlayPauseIcon(true);
        }
    });
}
// --- VINYL PLAYER SCRIPT END ---


// --- HAMBURGER MENU SCRIPT START ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if(hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));
}
// --- HAMBURGER MENU SCRIPT END ---