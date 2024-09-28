
var images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png", "images/11.png"];

document.getElementById('b1').addEventListener('click', function () {
    const img = document.getElementById('image');
    const randomIdx = Math.floor(Math.random() * images.length);
    const imageName = images[randomIdx];
    img.src = imageName;
});

document.getElementById('start-session').addEventListener('click', () => {
    startCountdown(20 * 60); //20 min countdown
    chrome.runtime.sendMessage({ action: 'startTimer' });
});

function startCountdown(duration) {
    let timer = duration, minutes, seconds;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        //formatting date and time
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdownElement.textContent = `${minutes}:${seconds}`;
        
        if (--timer < 0) {
            clearInterval(interval); //stop countdown when reach 0
        }
    }, 1000);
}