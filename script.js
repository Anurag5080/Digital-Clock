const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

setInterval(function () {
    let time = new Date();
    // console.log(time)
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // hours = String(hours).padStart(2, '0');
    // minutes = String(minutes).padStart(2, '0');
    // seconds = String(seconds).padStart(2, '0');

    box1.innerHTML = String(hours).padStart(2, '0');
    box2.innerHTML = String(minutes).padStart(2, '0');
    box3.innerHTML = String(seconds).padStart(2, '0');
}, 1000)