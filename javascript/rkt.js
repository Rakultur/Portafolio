// rkt - JavaScript

// Interruptor
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.documentElement.setAttribute('tema', 'claro');
    }
}
colorSwitch.addEventListener('change', cambiaTema);