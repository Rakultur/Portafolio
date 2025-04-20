// rkt - JavaScript

// Modal

var modal = document.getElementById("modal");

var btn = document.getElementById("btn-modal");

var span = document.getElementsByClassName("modal-btn-cerrar")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Interruptor cambio de tema
const colorSwitch = document.querySelector('#switch input[type="checkbox"]');
function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.documentElement.setAttribute('tema', 'claro');
    }
}
colorSwitch.addEventListener('change', cambiaTema);


// Decodificador

function MensajeMantenimiento() {
    alert("¡Actualmente se encuentra esta app en mantenimiento!");
}

