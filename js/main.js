// Declaracion de variables

let n_0 = 0
let n_1 = 1
let n_2 = 2
let n_3 = 3
let n_4 = 4
let n_5 = 5
let n_6 = 6
let n_7 = 7
let n_8 = 8
let n_9 = 9

let n_0_2 = "s"
let n_1_2 = "d"
let n_2_2 = "y"
let n_3_2 = "t"
let n_4_2 = "n"
let n_5_2 = "b"
let n_6_2 = "v"
let n_7_2 = "l"
let n_8_2 = "i"
let n_9_2 = "o"

let entrada 
let salida

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

// Funciones 


function cambiaTema(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('tema', 'oscuro');
    } else {
        document.documentElement.setAttribute('tema', 'claro');
    }
}

colorSwitch.addEventListener('change', cambiaTema);