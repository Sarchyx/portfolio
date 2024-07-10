// Videos

let videos = [
	{ src: './assets/animals-rng.mp4', title: 'Animals RNG' },
	{ src: './assets/dealership.mp4', title: 'Car Dealership' },
	{ src: './assets/xmas.mp4', title: 'Xmas Showcase' },
	{ src: './assets/cube-climbing.mp4', title: 'Climbing Game' },
	{ src: './assets/customization.mp4', title: 'Car Customization' },
	{ src: './assets/menu.mp4', title: 'Menu UI Animations' },
	{ src: './assets/inventory.mp4', title: 'Draggable Inventory' },
	{ src: './assets/angle-calculator.mp4', title: 'Angle Calculator' },
	{ src: './assets/reward.mp4', title: 'Reward Animation' },
	{ src: './assets/ik.mp4', title: 'Inverse Kinematics' },
	{ src: './assets/tornado.mp4', title: 'Trigonometry Tornado' },
	{ src: './assets/intro.mp4', title: 'Intro' },
	{ src: './assets/placement.mp4', title: 'Placement System' }
];

const videoListContainer = document.getElementById('video-list');
const mainVideo = document.getElementById('main-video');
const mainVideoTitle = document.getElementById('video-title');

function renderVideos() {
    videoListContainer.innerHTML = '';
    videos.forEach((video, index) => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('vid');
        if (index === 0) videoDiv.classList.add('active');

        const videoElement = document.createElement('video');
        videoElement.src = video.src;
        videoElement.muted = true;

        // Añadir evento de clic al contenedor del video
        videoDiv.addEventListener('click', () => {
            mainVideo.src = video.src;
            mainVideoTitle.textContent = `${index+1}. ${video.title}`;
            document.querySelectorAll('.vid').forEach(v => v.classList.remove('active'));
            videoDiv.classList.add('active');
        });

        const videoTitle = document.createElement('h3');
        videoTitle.classList.add('video-title');
        videoTitle.textContent = `${index+1}. ${video.title}`;

        videoDiv.appendChild(videoElement);
        videoDiv.appendChild(videoTitle);
        videoListContainer.appendChild(videoDiv);
    });

    // Inicializar el primer video en el reproductor principal
    mainVideo.src = videos[0].src;
    mainVideoTitle.textContent = `1. ${videos[0].title}`;
}

renderVideos();

// Menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}