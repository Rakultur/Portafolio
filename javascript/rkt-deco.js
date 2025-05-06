// Decodificador

try {
    // Declaración de variables
    let salida = document.querySelector("#salida-datos");

    let entrada = "";
    let resultado = "";
    let lista_entrante = "";
    let lista_saliente = [];
    let indicador = 0;

    const btn_codificar = document.querySelector("#codificar");
    const btn_decodificar = document.querySelector("#decodificar");

    // Codificar
    btn_codificar.addEventListener('click', () => {

        entrada = document.querySelector("#entrada-datos").value;
        lista_entrante = entrada.split("");
        console.log(lista_entrante);

        while (indicador < lista_entrante.length) {
            switch (lista_entrante[indicador]) {
                case lista_entrante[indicador] = "1":
                    lista_saliente[indicador] = "5";
                    break;
                case lista_entrante[indicador] = "2":
                    lista_saliente[indicador] = "8";
                    break;
                case lista_entrante[indicador] = "3":
                    lista_saliente[indicador] = "7";
                    break;
                case lista_entrante[indicador] = "4":
                    lista_saliente[indicador] = "2";
                    break;
                case lista_entrante[indicador] = "5":
                    lista_saliente[indicador] = "1";
                    break;
                case lista_entrante[indicador] = "6":
                    lista_saliente[indicador] = "3";
                    break;
                case lista_entrante[indicador] = "7":
                    lista_saliente[indicador] = "4";
                    break;
                case lista_entrante[indicador] = "8":
                    lista_saliente[indicador] = "9";
                    break;
                case lista_entrante[indicador] = "9":
                    lista_saliente[indicador] = "0";
                    break;
                case lista_entrante[indicador] = "0":
                    lista_saliente[indicador] = "6";
                    break;
                default:
                    alert("Entrada incorrecta, solo datos numericos enteros!");
                    indicador = 10000000000000000000000000;
                    break;
            }
            indicador = indicador + 1;
        }

        console.log(lista_saliente);
        resultado = lista_saliente.join("");
        document.querySelector("#salida-datos").value = resultado;

        // Reseteando indicadores
        resultado = "";
        entrada = "";
        indicador = 0;
        lista_saliente = [];
    });

    // Decodificar
    btn_decodificar.addEventListener('click', () => {
        alert("¡App en mantenimiento!")
    });

} catch (error) {
    alert("Lo lamentamos, ah ocurrido un error!")
}