
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

// Play/pause functionality
var playpause = function () {
    if (player.paused) {
        player.play(); // Play the audio if it's paused
    } else {
        player.pause(); // Pause the audio if it's playing
    }
};

playBtn.addEventListener("click", playpause);

player.onplay = function () {
    playBtn.classList.remove("fa-play");
    playBtn.classList.add("fa-pause");
}

player.onpause = function () {
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
}

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