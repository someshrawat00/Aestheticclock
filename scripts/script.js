const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const time = document.querySelector('.time');
const day = document.querySelector('.day');
const date = document.querySelector('.date .d');
const month = document.querySelector('.date .month');
const year = document.querySelector('.year');

function updateClockData() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const mo = String(now.getMonth() + 1).padStart(2, '0');
    const y = now.getFullYear();
    const weekday = days[now.getDay()];

    time.textContent = `${h}:${m}`;
    day.textContent = weekday;
    date.textContent =  d;
    month.textContent = mo;
    year.textContent = y;
}

setInterval(updateClockData, 1000);

let clockInterval;

function startClock() {
    if (!clockInterval) {
        updateClockData();
        clockInterval = setInterval(updateClockData, 1000);
    }
}

function stopClock() {
    clearInterval(clockInterval);
    clockInterval = null;
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        stopClock();
    } else {
        startClock();
    }
});

startClock();