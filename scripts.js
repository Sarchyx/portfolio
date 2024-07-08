let listVideos = document.querySelectorAll('.video-list .vid')
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .video-title')

let currentVideo = listVideos[0]

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

listVideos.forEach(video => {
    video.onclick = () => {
        if (video != currentVideo) {
            listVideos.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if (video.classList.contains('active')) {
                let src = video.querySelector('video').getAttribute('src');
                let videoTitle = video.querySelector('.video-title').textContent;
    
                mainVideo.src = src;
                title.textContent = videoTitle;
    
                currentVideo = video;
            }
        }
    }
})
