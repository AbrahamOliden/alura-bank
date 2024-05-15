const openCameraButton = document.querySelector('[data-video-boton]');
const video = document.querySelector('[data-video]');
const cameraInput = document.querySelector('[data-camera]');

openCameraButton.addEventListener('click', async () => {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    openCameraButton.style.display = 'none';
    cameraInput.style.display = 'block';
    video.srcObject = startVideo;
});