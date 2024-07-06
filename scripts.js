const videosN = 9;

let videos = [];

for (let i = 1; i <= videosN; i++) {
    videos.push(`./assets/video${i}.mp4`);
}

let currentVideoIndex = 0;

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function changeVideo(direction) {
    if (direction === 'next') {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else if (direction === 'prev') {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    }
    document.getElementById('videoSource').src = videos[currentVideoIndex];
    document.getElementById('videoPlayer').load();
}