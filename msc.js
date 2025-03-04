
/*====batas====*/

let opn = document.getElementById("opn");
let space2 = document.querySelector(".space2");

opn.addEventListener("click", function() {
    // Toggle sliding effect
    if (space2.style.transform === "translateX(100%)") {
        space2.style.transform = "translateX(0%)"; // Slide in
    } else {
        space2.style.transform = "translateX(100%)"; // Slide out
    }
});

/*===batas===*/

var player = document.getElementById("player");
let progress = document.getElementById("progress");
let playBtn = document.getElementById("playBtn");
let currentTimeDisplay = document.getElementById("current"); // Reference to the current time display
let musicTitle = document.getElementById("musicTitle"); // Reference to the song title display

let songs = [
    { src: './msc/CHRISYE.mp3', title: 'CHRISYE' },
    { src: './msc/First Love_Utada Hikaru.mp3', title: 'First Love' },
    { src: './msc/Say Yes_Punch.mp3', title: 'Say Yes' },
    { src: './msc/Serenata Jiwa_Dian.mp3', title: 'Serenata Jiwa' },
]; // List of songs
let currentSongIndex = 0; // Start with the first song

// Initialize the player with the first song
function initializePlayer() {
    playSong(currentSongIndex); // Play the first song
}

// Play/pause functionality
var playpause = function () {
    if (player.paused) {
        player.play(); // Play the audio if it's paused
    } else {
        player.pause(); // Pause the audio if it's playing
    }
};

playBtn.addEventListener("click", playpause);

// Update the play/pause button icon when playing or pausing
player.onplay = function () {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
};

player.onpause = function () {
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
};

// Update progress and current time on every 'timeupdate'
player.ontimeupdate = function () {
    let ct = player.currentTime;
    currentTimeDisplay.innerHTML = timeFormat(ct); // Update the current time on the display

    // Update progress bar
    let duration = player.duration;
    let prog = Math.floor((ct * 100) / duration);
    progress.style.setProperty("--progress", prog + "%");
};

// Format time to MM:SS
function timeFormat(ct) {
    let minutes = Math.floor(ct / 60);
    let seconds = Math.floor(ct % 60);

    // Ensure seconds is always two digits
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
}

// Play the current song
function playSong(songIndex) {
    player.src = songs[songIndex].src;
    musicTitle.innerText = songs[songIndex].title; // Update the song title display
    player.play(); // Play the new song
}

// Call the initializePlayer function when the page loads
window.onload = initializePlayer;

// Next button functionality
document.getElementById("nextBtn").addEventListener("click", function () {
    // Move to the next song
    currentSongIndex++;
    
    // If we're at the last song, loop back to the first song
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Loop back to the first song
    }

    playSong(currentSongIndex); // Play the next song
});

// Previous button functionality (if needed)
document.getElementById("prevBtn").addEventListener("click", function () {
    // Move to the previous song
    currentSongIndex--;
    
    // If we're at the first song, loop back to the last song
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Loop back to the last song
    }

    playSong(currentSongIndex); // Play the previous song
});
