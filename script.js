let isPlaying = false;
let currentSong = null;
let progressInterval;

document.getElementById('playPauseBtn').addEventListener('click', function() {
    if (this.classList.contains('fa-play')) {
        this.classList.remove('fa-play');
        this.classList.add('fa-pause');
        playSong();
    } else {
        this.classList.remove('fa-pause');
        this.classList.add('fa-play');
        pauseSong();
    }
});

document.getElementById('prevBtn').addEventListener('click', function() {
    alert('Previous button clicked');
});

document.getElementById('nextBtn').addEventListener('click', function() {
    alert('Next button clicked');
});

const songItems = document.querySelectorAll('.song-item');
songItems.forEach(item => {
    item.addEventListener('click', function() {
        const songName = this.getAttribute('data-song');
        currentSong = songName;
        playSong();
    });
});

function playSong() {
    if (currentSong) {
        alert(`Playing ${currentSong}`);
        isPlaying = true;
        document.getElementById('progressBar').value = 0;
        clearInterval(progressInterval);
        progressInterval = setInterval(updateProgressBar, 1000);
    }
}

function pauseSong() {
    isPlaying = false;
    clearInterval(progressInterval);
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    if (progressBar.value < 100) {
        progressBar.value = parseInt(progressBar.value) + 1;
    } else {
        clearInterval(progressInterval);
        isPlaying = false;
        document.getElementById('playPauseBtn').classList.remove('fa-pause');
        document.getElementById('playPauseBtn').classList.add('fa-play');
    }
}