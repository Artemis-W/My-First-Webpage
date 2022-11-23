var themeSwitch = document.getElementById('themeSwitch');
const cssElem = document.querySelector('link[rel="stylesheet"]');
if(themeSwitch) {
  initTheme(); // on page load, if user has already selected a specific theme -> apply it

themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
});

function initTheme() {
    var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    // update checkbox
    themeSwitch.checked = darkThemeSelected;
    // update body data-theme attribut
    darkThemeSelected ? cssElem.href = './css/dark.css': cssElem.href = './css/light.css'
};

function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
    cssElem.href = './css/dark.css';
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
    cssElem.href = './css/light.css';
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
};
}