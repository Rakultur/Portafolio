// Archivo js index

// Interruptor
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'claro');
    } else {
        document.documentElement.setAttribute('tema', 'oscuro');
    }
}
colorSwitch.addEventListener('change', cambiaTema);

