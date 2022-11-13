let darkEnabled = Boolean(localStorage.darkEnabled);
const cssElem = document.querySelector('link[rel="stylesheet"]');
if (!darkEnabled) cssElem.href = '../css/light.css';
else cssElem.href = '../css/dark.css';
document.getElementById("theme-btn")
    .addEventListener('click', function () {
    darkEnabled = !darkEnabled;
    localStorage.darkEnabled = darkEnabled;
    if (!darkEnabled) cssElem.href = '../css/light.css';
    else cssElem.href = '../css/dark.css';
});