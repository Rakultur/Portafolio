// Decodificador

try {
    // Declaración de variables
    const entrada = document.querySelector("#entrada-datos");
    const salida = document.querySelector("#salida-datos");



    let lista_ordenada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let lista_desordenada = [4, 7, 1, 9, 0, 6, 3, 8, 2, 5];

    let indicador = entrada.value;
    let solucion = [];
    solucion.length = indicador.length;

    const btn_codificar = document.querySelector("#codificar");
    const btn_decodificar = document.querySelector("#decodificar");


    btn_codificar.addEventListener('click', () => {

        salida.value = "";

        for (let index = 0; index < indicador.length; index++) {
            solucion.push(index);
        }

        alert("codificar");

        salida.value = solucion;

        solucion.length = 0;
        let = "";
    });

    btn_decodificar.addEventListener('click', () => {
        salida.value = "";
        alert("decodificar");
    });

} catch (error) {
    alert("Lo lamentamos, ah ocurrido un error!")
}