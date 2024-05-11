const video = document.getElementById("video-background");
const unmuteButton = document.getElementById("unmute-button");

video.addEventListener("loadeddata", function () {
    document.getElementById("loader").style.display = "none";
});

unmuteButton.addEventListener("click", () => {
    video.muted = !video.muted;
    unmuteButton.value = video.muted ? "Desmutar 🔊" : "Mutar 🔇"
});
