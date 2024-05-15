const openCameraButton = document.querySelector('[data-video-boton]');
const video = document.querySelector('[data-video]');
const cameraInput = document.querySelector('[data-camera]');
const takePhotoButton = document.querySelector('[data-tomar-foto]');
const message = document.querySelector('[data-mensaje]');
const canvas = document.querySelector('[data-video-canvas]');
const submitButton = document.querySelector('[data-enviar]');
let imgUrl = '';

openCameraButton.addEventListener('click', async () => {
    const startVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    openCameraButton.style.display = 'none';
    cameraInput.style.display = 'block';
    video.srcObject = startVideo;
});

takePhotoButton.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    imgUrl = canvas.toDataURL('image/jpeg');
    cameraInput.style.display = 'none';
    message.style.display = 'block';
});

submitButton.addEventListener('click', () => {
    const receiveData = localStorage.getItem('registro');
    const parseData = JSON.parse(receiveData);
    parseData.img_url = imgUrl;

    localStorage.setItem('registro', JSON.stringify(parseData));
    window.location.href = './abrir-cuenta-form-3.html';
});