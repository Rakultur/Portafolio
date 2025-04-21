// rkt - JavaScript

// Modal

try {
    // Modal Python

    let modal_python = document.querySelector("#modal-python");
    let btn_modal_python = document.querySelector("#btn-modal-python");
    let span_modal_python = document.querySelector("#cerrar-python");

    btn_modal_python.onclick = function () {
        modal_python.style.display = "block";
    }

    span_modal_python.onclick = function () {
        modal_python.style.display = "none";
    }

    // Modal HTML

    let modal_html = document.querySelector("#modal-html");
    let btn_modal_html = document.querySelector("#btn-modal-html");
    let span_modal_html = document.querySelector("#cerrar-html");

    btn_modal_html.onclick = function () {
        modal_html.style.display = "block";
    }

    span_modal_html.onclick = function () {
        modal_html.style.display = "none";
    }

    // Modal CSS

    let modal_css = document.querySelector("#modal-css")
    let btn_modal_css = document.querySelector("#btn-modal-css")
    let span_modal_css = document.querySelector("#cerrar-css")

    btn_modal_css.onclick = function () {
        modal_css.style.display = "block"
    }

    span_modal_css.onclick = function () {
        modal_css.style.display = "none"
    }

    // Modal JavaScript

    let modal_javascript = document.querySelector("#modal-javascript")
    let btn_modal_javascript = document.querySelector("#btn-modal-javascript")
    let span_modal_javascript = document.querySelector("#cerrar-javascript")

    btn_modal_javascript.onclick = function () {
        modal_javascript.style.display = "block"
    }

    span_modal_javascript.onclick = function () {
        modal_javascript.style.display = "none"
    }

    // Modal GitHub

    let modal_github = document.querySelector("#modal-github")
    let btn_modal_github = document.querySelector("#btn-modal-github")
    let span_modal_github = document.querySelector("#cerrar-github")

    btn_modal_github.onclick = function () {
        modal_github.style.display = "block"
    }

    span_modal_github.onclick = function () {
        modal_github.style.display = "none"
    }

    // Modal CPanel

    let modal_cpanel = document.querySelector("#modal-cpanel")
    let btn_modal_cpanel = document.querySelector("#btn-modal-cpanel")
    let span_modal_cpanel = document.querySelector("#cerrar-cpanel")

    btn_modal_cpanel.onclick = function () {
        modal_cpanel.style.display = "block"
    }

    span_modal_cpanel.onclick = function () {
        modal_cpanel.style.display = "none"
    }

    // Modal WordPress

    let modal_wordpress = document.querySelector("#modal-wordpress")
    let btn_modal_wordpress = document.querySelector("#btn-modal-wordpress")
    let span_modal_wordpress = document.querySelector("#cerrar-wordpress")

    btn_modal_wordpress.onclick = function () {
        modal_wordpress.style.display = "block"
    }

    span_modal_wordpress.onclick = function () {
        modal_wordpress.style.display = "none"
    }

    // Modal Sketchup

    let modal_sketchup = document.querySelector("#modal-sketchup")
    let btn_modal_sketchup = document.querySelector("#btn-modal-sketchup")
    let span_modal_sketchup = document.querySelector("#cerrar-sketchup")

    btn_modal_sketchup.onclick = function () {
        modal_sketchup.style.display = "block"
    }

    span_modal_sketchup.onclick = function () {
        modal_sketchup.style.display = "none"
    }

    // Modal Ofitmatica

    let modal_ofimatica = document.querySelector("#modal-ofimatica")
    let btn_modal_ofimatica = document.querySelector("#btn-modal-ofimatica")
    let span_modal_ofimatica = document.querySelector("#cerrar-ofimatica")

    btn_modal_ofimatica.onclick = function () {
        modal_ofimatica.style.display = "block"
    }

    span_modal_ofimatica.onclick = function () {
        modal_ofimatica.style.display = "none"
    }

    // Modal Gimp

    let modal_gimp = document.querySelector("#modal-gimp")
    let btn_modal_gimp = document.querySelector("#btn-modal-gimp")
    let span_modal_gimp = document.querySelector("#cerrar-gimp")

    btn_modal_gimp.onclick = function () {
        modal_gimp.style.display = "block"
    }

    span_modal_gimp.onclick = function () {
        modal_gimp.style.display = "none"
    }

    // Modal Alegra

    let modal_alegra = document.querySelector("#modal-alegra")
    let btn_modal_alegra = document.querySelector("#btn-modal-alegra")
    let span_modal_alegra = document.querySelector("#cerrar-alegra")

    btn_modal_alegra.onclick = function () {
        modal_alegra.style.display = "block"
    }

    span_modal_alegra.onclick = function () {
        modal_alegra.style.display = "none"
    }

    // funcion window para salir de los modal
    window.onclick = function (event) {
        switch (event.target) {
            case modal_python:
                modal_python.style.display = "none";
                break;
            case modal_html:
                modal_html.style.display = "none";
                break;
            case modal_css:
                modal_css.style.display = "none";
                break;
            case modal_javascript:
                modal_javascript.style.display = "none";
                break;
            case modal_github:
                modal_github.style.display = "none";
                break;
            case modal_cpanel:
                modal_cpanel.style.display = "none";
                break;
            case modal_wordpress:
                modal_wordpress.style.display = "none";
                break;
            case modal_sketchup:
                modal_sketchup.style.display = "none";
                break;
            case modal_ofimatica:
                modal_ofimatica.style.display = "none";
                break;
            case modal_gimp:
                modal_gimp.style.display = "none";
                break;
            case modal_alegra:
                modal_alegra.style.display = "none";
                break;
            default:
                break;
        }
    }
} catch (error) {

}

// Mensaje de mantenimiento

function MensajeMantenimiento() {
    alert("¡Actualmente se encuentra esta app en mantenimiento!");
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