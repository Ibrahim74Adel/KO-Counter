// توقيت الهدف في نهائي القرن
const targetDate = new Date('2020-11-27T22:55:45').getTime();

// تغيير الخلفيات كل 25 ثانية
const images = [
    './8545.jpg',
    './8546.png',
    './8547.jpg',
    './8548.jpg'
];

let imageIndex = 0;

function changeBackground() {
    document.body.style.backgroundImage = `url('${images[imageIndex]}')`;
    imageIndex = (imageIndex + 1) % images.length;
}

setInterval(changeBackground, 25000);

// تحديث العد التصاعدي
function updateCounter() {
    const now = new Date().getTime();
    const elapsedTime = now - targetDate;

    // حساب الوحدات الزمنية للعد التصاعدي
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    document.getElementById('days-up').textContent = days;
    document.getElementById('hours-up').textContent = hours;
    document.getElementById('minutes-up').textContent = minutes;
    document.getElementById('seconds-up').textContent = seconds;

    // حساب المكونات الزمنية الأخرى
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const totalMinutes = Math.floor(elapsedTime / (1000 * 60));
    const totalHours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const totalDays = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));

    document.getElementById('total-seconds').textContent = totalSeconds;
    document.getElementById('total-minutes').textContent = totalMinutes;
    document.getElementById('total-hours').textContent = totalHours;
    document.getElementById('total-days').textContent = totalDays;
}

// التحديث كل ثانية
setInterval(updateCounter, 1000);
