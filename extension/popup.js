//window.onload = chooseImage
//content.document.defaultView.wrappedJSObject.chooseImage();
//document.getElementById("b1").addEventListener('click', chooseImage);
var images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png", "images/9.png", "images/10.png", "images/11.png"];

document.getElementById('b1').addEventListener('click', function () {
    const img = document.getElementById('image');
    // Select a random image from the list
    const randomIdx = Math.floor(Math.random() * images.length);
    const imageName = images[randomIdx];

    // Set the selected image as the source of the <img> element
    img.src = imageName;
});


function updateClock() {
    const { remainingTime } = timer;
    const minutes = `${remainingTime.minutes}`.padStart(2, '0');
    const seconds = `${remainingTime.seconds}`.padStart(2, '0');
  
    const min = document.getElementById('js-minutes');
    const sec = document.getElementById('js-seconds');
    min.textContent = minutes;
    sec.textContent = seconds;
  }