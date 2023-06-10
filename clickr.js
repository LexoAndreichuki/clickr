let clicks = 0;

const TIMEOUT = 5000;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
button.onclick = start;
function start() {
    const starttime = Date.now();

    display.textContent = formattime (TIMEOUT);
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval (() => {
        const delta = Date.now() - starttime;
        display.textContent = formattime(timeout - delta);
    }, 100);

   const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Game Over';
        clearInterval(interval);

        clearTimeout(timeout);
    }, TIMEOUT);
}
function formattime(ms) {
    return Number.parseFloat(ms / 1000).toFixed(2);
}