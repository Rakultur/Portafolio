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
                case lista_entrante[indicador] = "´":
                    lista_saliente[indicador] = "!";
                    break;
                case lista_entrante[indicador] = "¹":
                    lista_saliente[indicador] = "";
                    break;
                case lista_entrante[indicador] = "▀":
                    lista_saliente[indicador] = "#";
                    break;
                case lista_entrante[indicador] = "¼":
                    lista_saliente[indicador] = "$";
                    break;
                case lista_entrante[indicador] = "Ñ":
                    lista_saliente[indicador] = "%";
                    break;
                case lista_entrante[indicador] = "v":
                    lista_saliente[indicador] = "&";
                    break;
                case lista_entrante[indicador] = "☺":
                    lista_saliente[indicador] = "'";
                    break;
                case lista_entrante[indicador] = "├":
                    lista_saliente[indicador] = "(";
                    break;
                case lista_entrante[indicador] = "Ó":
                    lista_saliente[indicador] = ")";
                    break;
                case lista_entrante[indicador] = "┬":
                    lista_saliente[indicador] = "*";
                    break;
                case lista_entrante[indicador] = "p":
                    lista_saliente[indicador] = "+";
                    break;
                case lista_entrante[indicador] = "×":
                    lista_saliente[indicador] = ",";
                    break;
                case lista_entrante[indicador] = "<":
                    lista_saliente[indicador] = "-";
                    break;
                case lista_entrante[indicador] = "¢":
                    lista_saliente[indicador] = ".";
                    break;
                case lista_entrante[indicador] = "ô":
                    lista_saliente[indicador] = "/";
                    break;
                case lista_entrante[indicador] = "R":
                    lista_saliente[indicador] = "0";
                    break;
                case lista_entrante[indicador] = "¥":
                    lista_saliente[indicador] = "1";
                    break;
                case lista_entrante[indicador] = "m":
                    lista_saliente[indicador] = "2";
                    break;
                case lista_entrante[indicador] = "♪":
                    lista_saliente[indicador] = "3";
                    break;
                case lista_entrante[indicador] = "Ú":
                    lista_saliente[indicador] = "4";
                    break;
                case lista_entrante[indicador] = "ë":
                    lista_saliente[indicador] = "5";
                    break;
                case lista_entrante[indicador] = "h":
                    lista_saliente[indicador] = "6";
                    break;
                case lista_entrante[indicador] = "ú":
                    lista_saliente[indicador] = "7";
                    break;
                case lista_entrante[indicador] = "S":
                    lista_saliente[indicador] = "8";
                    break;
                case lista_entrante[indicador] = "d":
                    lista_saliente[indicador] = "9";
                    break;
                case lista_entrante[indicador] = "┼":
                    lista_saliente[indicador] = ":";
                    break;
                case lista_entrante[indicador] = "¤":
                    lista_saliente[indicador] = ";";
                    break;
                case lista_entrante[indicador] = "l":
                    lista_saliente[indicador] = "<";
                    break;
                case lista_entrante[indicador] = "å":
                    lista_saliente[indicador] = "=";
                    break;
                case lista_entrante[indicador] = "↓":
                    lista_saliente[indicador] = ">";
                    break;
                case lista_entrante[indicador] = "•":
                    lista_saliente[indicador] = "?";
                    break;
                case lista_entrante[indicador] = "Ê":
                    lista_saliente[indicador] = "@";
                    break;
                case lista_entrante[indicador] = "è":
                    lista_saliente[indicador] = "A";
                    break;
                case lista_entrante[indicador] = "♥":
                    lista_saliente[indicador] = "B";
                    break;
                case lista_entrante[indicador] = "¿":
                    lista_saliente[indicador] = "C";
                    break;
                case lista_entrante[indicador] = "Å":
                    lista_saliente[indicador] = "D";
                    break;
                case lista_entrante[indicador] = "g":
                    lista_saliente[indicador] = "E";
                    break;
                case lista_entrante[indicador] = "┘":
                    lista_saliente[indicador] = "F";
                    break;
                case lista_entrante[indicador] = "Á":
                    lista_saliente[indicador] = "G";
                    break;
                case lista_entrante[indicador] = "G":
                    lista_saliente[indicador] = "H";
                    break;
                case lista_entrante[indicador] = "":
                    lista_saliente[indicador] = "I";
                    break;
                case lista_entrante[indicador] = "#":
                    lista_saliente[indicador] = "J";
                    break;
                case lista_entrante[indicador] = "z":
                    lista_saliente[indicador] = "K";
                    break;
                case lista_entrante[indicador] = "┤":
                    lista_saliente[indicador] = "L";
                    break;
                case lista_entrante[indicador] = "♦":
                    lista_saliente[indicador] = "M";
                    break;
                case lista_entrante[indicador] = "©":
                    lista_saliente[indicador] = "N";
                    break;
                case lista_entrante[indicador] = "·":
                    lista_saliente[indicador] = "O";
                    break;
                case lista_entrante[indicador] = "░":
                    lista_saliente[indicador] = "P";
                    break;
                case lista_entrante[indicador] = "t":
                    lista_saliente[indicador] = "Q";
                    break;
                case lista_entrante[indicador] = "H":
                    lista_saliente[indicador] = "R";
                    break;
                case lista_entrante[indicador] = "╚":
                    lista_saliente[indicador] = "S";
                    break;
                case lista_entrante[indicador] = "☼":
                    lista_saliente[indicador] = "T";
                    break;
                case lista_entrante[indicador] = "V":
                    lista_saliente[indicador] = "U";
                    break;
                case lista_entrante[indicador] = "Q":
                    lista_saliente[indicador] = "V";
                    break;
                case lista_entrante[indicador] = "_":
                    lista_saliente[indicador] = "W";
                    break;
                case lista_entrante[indicador] = "ï":
                    lista_saliente[indicador] = "X";
                    break;
                case lista_entrante[indicador] = "²":
                    lista_saliente[indicador] = "Y";
                    break;
                case lista_entrante[indicador] = "2":
                    lista_saliente[indicador] = "Z";
                    break;
                case lista_entrante[indicador] = "D":
                    lista_saliente[indicador] = "[";
                    break;
                case lista_entrante[indicador] = "â":
                    lista_saliente[indicador] = "";
                    break;
                case lista_entrante[indicador] = "↑":
                    lista_saliente[indicador] = "]";
                    break;
                case lista_entrante[indicador] = "Ì":
                    lista_saliente[indicador] = "^";
                    break;
                case lista_entrante[indicador] = "Ý":
                    lista_saliente[indicador] = "_";
                    break;
                case lista_entrante[indicador] = "¾":
                    lista_saliente[indicador] = "`";
                    break;
                case lista_entrante[indicador] = "═":
                    lista_saliente[indicador] = "a";
                    break;
                case lista_entrante[indicador] = "i":
                    lista_saliente[indicador] = "b";
                    break;
                case lista_entrante[indicador] = "♫":
                    lista_saliente[indicador] = "c";
                    break;
                case lista_entrante[indicador] = "♂":
                    lista_saliente[indicador] = "d";
                    break;
                case lista_entrante[indicador] = "ç":
                    lista_saliente[indicador] = "e";
                    break;
                case lista_entrante[indicador] = "¸":
                    lista_saliente[indicador] = "f";
                    break;
                case lista_entrante[indicador] = "Ò":
                    lista_saliente[indicador] = "g";
                    break;
                case lista_entrante[indicador] = "K":
                    lista_saliente[indicador] = "h";
                    break;
                case lista_entrante[indicador] = "╩":
                    lista_saliente[indicador] = "i";
                    break;
                case lista_entrante[indicador] = "5":
                    lista_saliente[indicador] = "j";
                    break;
                case lista_entrante[indicador] = "J":
                    lista_saliente[indicador] = "k";
                    break;
                case lista_entrante[indicador] = "→":
                    lista_saliente[indicador] = "l";
                    break;
                case lista_entrante[indicador] = "Z":
                    lista_saliente[indicador] = "m";
                    break;
                case lista_entrante[indicador] = "`":
                    lista_saliente[indicador] = "n";
                    break;
                case lista_entrante[indicador] = "█":
                    lista_saliente[indicador] = "o";
                    break;
                case lista_entrante[indicador] = "─":
                    lista_saliente[indicador] = "p";
                    break;
                case lista_entrante[indicador] = "ÿ":
                    lista_saliente[indicador] = "q";
                    break;
                case lista_entrante[indicador] = "←":
                    lista_saliente[indicador] = "r";
                    break;
                case lista_entrante[indicador] = "ü":
                    lista_saliente[indicador] = "s";
                    break;
                case lista_entrante[indicador] = "1":
                    lista_saliente[indicador] = "t";
                    break;
                case lista_entrante[indicador] = "╣":
                    lista_saliente[indicador] = "u";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = "v";
                    break;
                case lista_entrante[indicador] = "Ö":
                    lista_saliente[indicador] = "w";
                    break;
                case lista_entrante[indicador] = "ê":
                    lista_saliente[indicador] = "x";
                    break;
                case lista_entrante[indicador] = "╔":
                    lista_saliente[indicador] = "y";
                    break;
                case lista_entrante[indicador] = "y":
                    lista_saliente[indicador] = "z";
                    break;
                case lista_entrante[indicador] = "9":
                    lista_saliente[indicador] = "{";
                    break;
                case lista_entrante[indicador] = "↕":
                    lista_saliente[indicador] = "|";
                    break;
                case lista_entrante[indicador] = "Ï":
                    lista_saliente[indicador] = "}";
                    break;
                case lista_entrante[indicador] = "é":
                    lista_saliente[indicador] = "~";
                    break;
                case lista_entrante[indicador] = "4":
                    lista_saliente[indicador] = " ";
                    break;
                case lista_entrante[indicador] = "☻":
                    lista_saliente[indicador] = "Ç";
                    break;
                case lista_entrante[indicador] = "Þ":
                    lista_saliente[indicador] = "ü";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = "é";
                    break;
                case lista_entrante[indicador] = "'":
                    lista_saliente[indicador] = "â";
                    break;
                case lista_entrante[indicador] = ">":
                    lista_saliente[indicador] = "ä";
                    break;
                case lista_entrante[indicador] = "▄":
                    lista_saliente[indicador] = "à";
                    break;
                case lista_entrante[indicador] = "►":
                    lista_saliente[indicador] = "å";
                    break;
                case lista_entrante[indicador] = "ö":
                    lista_saliente[indicador] = "ç";
                    break;
                case lista_entrante[indicador] = "~":
                    lista_saliente[indicador] = "ê";
                    break;
                case lista_entrante[indicador] = ",":
                    lista_saliente[indicador] = "ë";
                    break;
                case lista_entrante[indicador] = "k":
                    lista_saliente[indicador] = "è";
                    break;
                case lista_entrante[indicador] = "Ô":
                    lista_saliente[indicador] = "ï";
                    break;
                case lista_entrante[indicador] = "^":
                    lista_saliente[indicador] = "î";
                    break;
                case lista_entrante[indicador] = "À":
                    lista_saliente[indicador] = "ì";
                    break;
                case lista_entrante[indicador] = "/":
                    lista_saliente[indicador] = "Ä";
                    break;
                case lista_entrante[indicador] = "?":
                    lista_saliente[indicador] = "Å";
                    break;
                case lista_entrante[indicador] = "T":
                    lista_saliente[indicador] = "É";
                    break;
                case lista_entrante[indicador] = "7":
                    lista_saliente[indicador] = "æ";
                    break;
                case lista_entrante[indicador] = "ƒ":
                    lista_saliente[indicador] = "Æ";
                    break;
                case lista_entrante[indicador] = "q":
                    lista_saliente[indicador] = "ô";
                    break;
                case lista_entrante[indicador] = "j":
                    lista_saliente[indicador] = "ö";
                    break;
                case lista_entrante[indicador] = "♀":
                    lista_saliente[indicador] = "ò";
                    break;
                case lista_entrante[indicador] = "í":
                    lista_saliente[indicador] = "û";
                    break;
                case lista_entrante[indicador] = "6":
                    lista_saliente[indicador] = "ù";
                    break;
                case lista_entrante[indicador] = "+":
                    lista_saliente[indicador] = "ÿ";
                    break;
                case lista_entrante[indicador] = "¯":
                    lista_saliente[indicador] = "Ö";
                    break;
                case lista_entrante[indicador] = "½":
                    lista_saliente[indicador] = "Ü";
                    break;
                case lista_entrante[indicador] = "-":
                    lista_saliente[indicador] = "ø";
                    break;
                case lista_entrante[indicador] = "Ç":
                    lista_saliente[indicador] = "£";
                    break;
                case lista_entrante[indicador] = "Î":
                    lista_saliente[indicador] = "Ø";
                    break;
                case lista_entrante[indicador] = "{":
                    lista_saliente[indicador] = "×";
                    break;
                case lista_entrante[indicador] = ".":
                    lista_saliente[indicador] = "ƒ";
                    break;
                case lista_entrante[indicador] = "○":
                    lista_saliente[indicador] = "á";
                    break;
                case lista_entrante[indicador] = "M":
                    lista_saliente[indicador] = "í";
                    break;
                case lista_entrante[indicador] = "W":
                    lista_saliente[indicador] = "ó";
                    break;
                case lista_entrante[indicador] = "[":
                    lista_saliente[indicador] = "ú";
                    break;
                case lista_entrante[indicador] = "]":
                    lista_saliente[indicador] = "ñ";
                    break;
                case lista_entrante[indicador] = "ò":
                    lista_saliente[indicador] = "Ñ";
                    break;
                case lista_entrante[indicador] = "◙":
                    lista_saliente[indicador] = "ª";
                    break;
                case lista_entrante[indicador] = "$":
                    lista_saliente[indicador] = "º";
                    break;
                case lista_entrante[indicador] = "¨":
                    lista_saliente[indicador] = "¿";
                    break;
                case lista_entrante[indicador] = "Â":
                    lista_saliente[indicador] = "®";
                    break;
                case lista_entrante[indicador] = "ì":
                    lista_saliente[indicador] = "¬";
                    break;
                case lista_entrante[indicador] = "F":
                    lista_saliente[indicador] = "½";
                    break;
                case lista_entrante[indicador] = "╠":
                    lista_saliente[indicador] = "¼";
                    break;
                case lista_entrante[indicador] = "Ä":
                    lista_saliente[indicador] = "¡";
                    break;
                case lista_entrante[indicador] = "ß":
                    lista_saliente[indicador] = "«";
                    break;
                case lista_entrante[indicador] = "Ë":
                    lista_saliente[indicador] = "»";
                    break;
                case lista_entrante[indicador] = "»":
                    lista_saliente[indicador] = "░";
                    break;
                case lista_entrante[indicador] = "‗":
                    lista_saliente[indicador] = "▒";
                    break;
                case lista_entrante[indicador] = "Ð":
                    lista_saliente[indicador] = "▓";
                    break;
                case lista_entrante[indicador] = "╬":
                    lista_saliente[indicador] = "│";
                    break;
                case lista_entrante[indicador] = "Ù":
                    lista_saliente[indicador] = "┤";
                    break;
                case lista_entrante[indicador] = "|":
                    lista_saliente[indicador] = "Á";
                    break;
                case lista_entrante[indicador] = "Ã":
                    lista_saliente[indicador] = "Â";
                    break;
                case lista_entrante[indicador] = "ª":
                    lista_saliente[indicador] = "À";
                    break;
                case lista_entrante[indicador] = "Í":
                    lista_saliente[indicador] = "©";
                    break;
                case lista_entrante[indicador] = "┌":
                    lista_saliente[indicador] = "╣";
                    break;
                case lista_entrante[indicador] = "Ü":
                    lista_saliente[indicador] = "║";
                    break;
                case lista_entrante[indicador] = "O":
                    lista_saliente[indicador] = "╗";
                    break;
                case lista_entrante[indicador] = "a":
                    lista_saliente[indicador] = "╝";
                    break;
                case lista_entrante[indicador] = "0":
                    lista_saliente[indicador] = "¢";
                    break;
                case lista_entrante[indicador] = ")":
                    lista_saliente[indicador] = "¥";
                    break;
                case lista_entrante[indicador] = "&":
                    lista_saliente[indicador] = "┐";
                    break;
                case lista_entrante[indicador] = "ã":
                    lista_saliente[indicador] = "└";
                    break;
                case lista_entrante[indicador] = "↨":
                    lista_saliente[indicador] = "┴";
                    break;
                case lista_entrante[indicador] = "=":
                    lista_saliente[indicador] = "┬";
                    break;
                case lista_entrante[indicador] = "Ø":
                    lista_saliente[indicador] = "├";
                    break;
                case lista_entrante[indicador] = "3":
                    lista_saliente[indicador] = "─";
                    break;
                case lista_entrante[indicador] = "r":
                    lista_saliente[indicador] = "┼";
                    break;
                case lista_entrante[indicador] = "¶":
                    lista_saliente[indicador] = "ã";
                    break;
                case lista_entrante[indicador] = "╝":
                    lista_saliente[indicador] = "Ã";
                    break;
                case lista_entrante[indicador] = "ù":
                    lista_saliente[indicador] = "╚";
                    break;
                case lista_entrante[indicador] = "╦":
                    lista_saliente[indicador] = "╔";
                    break;
                case lista_entrante[indicador] = "þ":
                    lista_saliente[indicador] = "╩";
                    break;
                case lista_entrante[indicador] = "U":
                    lista_saliente[indicador] = "╦";
                    break;
                case lista_entrante[indicador] = "o":
                    lista_saliente[indicador] = "╠";
                    break;
                case lista_entrante[indicador] = "®":
                    lista_saliente[indicador] = "═";
                    break;
                case lista_entrante[indicador] = "◘":
                    lista_saliente[indicador] = "╬";
                    break;
                case lista_entrante[indicador] = "N":
                    lista_saliente[indicador] = "¤";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = "ð";
                    break;
                case lista_entrante[indicador] = "¶":
                    lista_saliente[indicador] = "Ð";
                    break;
                case lista_entrante[indicador] = "║":
                    lista_saliente[indicador] = "Ê";
                    break;
                case lista_entrante[indicador] = "ð":
                    lista_saliente[indicador] = "Ë";
                    break;
                case lista_entrante[indicador] = "É":
                    lista_saliente[indicador] = "È";
                    break;
                case lista_entrante[indicador] = "f":
                    lista_saliente[indicador] = "ı";
                    break;
                case lista_entrante[indicador] = "8":
                    lista_saliente[indicador] = "Í";
                    break;
                case lista_entrante[indicador] = "È":
                    lista_saliente[indicador] = "Î";
                    break;
                case lista_entrante[indicador] = "I":
                    lista_saliente[indicador] = "Ï";
                    break;
                case lista_entrante[indicador] = "└":
                    lista_saliente[indicador] = "┘";
                    break;
                case lista_entrante[indicador] = "e":
                    lista_saliente[indicador] = "┌";
                    break;
                case lista_entrante[indicador] = "ñ":
                    lista_saliente[indicador] = "█";
                    break;
                case lista_entrante[indicador] = "╗":
                    lista_saliente[indicador] = "▄";
                    break;
                case lista_entrante[indicador] = "@":
                    lista_saliente[indicador] = "¦";
                    break;
                case lista_entrante[indicador] = "ı":
                    lista_saliente[indicador] = "Ì";
                    break;
                case lista_entrante[indicador] = "ó":
                    lista_saliente[indicador] = "▀";
                    break;
                case lista_entrante[indicador] = "♠":
                    lista_saliente[indicador] = "Ó";
                    break;
                case lista_entrante[indicador] = "▒":
                    lista_saliente[indicador] = "ß";
                    break;
                case lista_entrante[indicador] = "ä":
                    lista_saliente[indicador] = "Ô";
                    break;
                case lista_entrante[indicador] = "u":
                    lista_saliente[indicador] = "Ò";
                    break;
                case lista_entrante[indicador] = "°":
                    lista_saliente[indicador] = "õ";
                    break;
                case lista_entrante[indicador] = "\"":
                    lista_saliente[indicador] = "Õ";
                    break;
                case lista_entrante[indicador] = "↔":
                    lista_saliente[indicador] = "µ";
                    break;
                case lista_entrante[indicador] = "³":
                    lista_saliente[indicador] = "þ";
                    break;
                case lista_entrante[indicador] = "û":
                    lista_saliente[indicador] = "Þ";
                    break;
                case lista_entrante[indicador] = "▓":
                    lista_saliente[indicador] = "Ú";
                    break;
                case lista_entrante[indicador] = "x":
                    lista_saliente[indicador] = "Û";
                    break;
                case lista_entrante[indicador] = "î":
                    lista_saliente[indicador] = "Ù";
                    break;
                case lista_entrante[indicador] = "¦":
                    lista_saliente[indicador] = "ý";
                    break;
                case lista_entrante[indicador] = "s":
                    lista_saliente[indicador] = "Ý";
                    break;
                case lista_entrante[indicador] = "ý":
                    lista_saliente[indicador] = "¯";
                    break;
                case lista_entrante[indicador] = "E":
                    lista_saliente[indicador] = "´";
                    break;
                case lista_entrante[indicador] = "Æ":
                    lista_saliente[indicador] = "±";
                    break;
                case lista_entrante[indicador] = "Y":
                    lista_saliente[indicador] = "‗";
                    break;
                case lista_entrante[indicador] = "▬":
                    lista_saliente[indicador] = "¾";
                    break;
                case lista_entrante[indicador] = "!":
                    lista_saliente[indicador] = "¶";
                    break;
                case lista_entrante[indicador] = "P":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "♣":
                    lista_saliente[indicador] = "÷";
                    break;
                case lista_entrante[indicador] = "w":
                    lista_saliente[indicador] = "¸";
                    break;
                case lista_entrante[indicador] = "%":
                    lista_saliente[indicador] = "°";
                    break;
                case lista_entrante[indicador] = "∟":
                    lista_saliente[indicador] = "¨";
                    break;
                case lista_entrante[indicador] = "‼":
                    lista_saliente[indicador] = "·";
                    break;
                case lista_entrante[indicador] = "A":
                    lista_saliente[indicador] = "¹";
                    break;
                case lista_entrante[indicador] = "Û":
                    lista_saliente[indicador] = "³";
                    break;
                case lista_entrante[indicador] = "¬":
                    lista_saliente[indicador] = "²";
                    break;
                case lista_entrante[indicador] = "L":
                    lista_saliente[indicador] = "■";
                    break;
                case lista_entrante[indicador] = "æ":
                    lista_saliente[indicador] = "☺";
                    break;
                case lista_entrante[indicador] = "(":
                    lista_saliente[indicador] = "☻";
                    break;
                case lista_entrante[indicador] = "▲":
                    lista_saliente[indicador] = "♥";
                    break;
                case lista_entrante[indicador] = "c":
                    lista_saliente[indicador] = "♦";
                    break;
                case lista_entrante[indicador] = "õ":
                    lista_saliente[indicador] = "♣";
                    break;
                case lista_entrante[indicador] = "÷":
                    lista_saliente[indicador] = "♠";
                    break;
                case lista_entrante[indicador] = "ø":
                    lista_saliente[indicador] = "•";
                    break;
                case lista_entrante[indicador] = "C":
                    lista_saliente[indicador] = "◘";
                    break;
                case lista_entrante[indicador] = "◄":
                    lista_saliente[indicador] = "○";
                    break;
                case lista_entrante[indicador] = "n":
                    lista_saliente[indicador] = "◙";
                    break;
                case lista_entrante[indicador] = "º":
                    lista_saliente[indicador] = "♂";
                    break;
                case lista_entrante[indicador] = "┐":
                    lista_saliente[indicador] = "♀";
                    break;
                case lista_entrante[indicador] = "«":
                    lista_saliente[indicador] = "♪";
                    break;
                case lista_entrante[indicador] = "■":
                    lista_saliente[indicador] = "♫";
                    break;
                case lista_entrante[indicador] = "│":
                    lista_saliente[indicador] = "☼";
                    break;
                case lista_entrante[indicador] = "}":
                    lista_saliente[indicador] = "►";
                    break;
                case lista_entrante[indicador] = "B":
                    lista_saliente[indicador] = "◄";
                    break;
                case lista_entrante[indicador] = "£":
                    lista_saliente[indicador] = "↕";
                    break;
                case lista_entrante[indicador] = "±":
                    lista_saliente[indicador] = "‼";
                    break;
                case lista_entrante[indicador] = "*":
                    lista_saliente[indicador] = "¶";
                    break;
                case lista_entrante[indicador] = "b":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "X":
                    lista_saliente[indicador] = "▬";
                    break;
                case lista_entrante[indicador] = "┴":
                    lista_saliente[indicador] = "↨";
                    break;
                case lista_entrante[indicador] = "à":
                    lista_saliente[indicador] = "↑";
                    break;
                case lista_entrante[indicador] = ";":
                    lista_saliente[indicador] = "↓";
                    break;
                case lista_entrante[indicador] = "µ":
                    lista_saliente[indicador] = "→";
                    break;
                case lista_entrante[indicador] = "¡":
                    lista_saliente[indicador] = "←";
                    break;
                case lista_entrante[indicador] = "Õ":
                    lista_saliente[indicador] = "∟";
                    break;
                case lista_entrante[indicador] = ":":
                    lista_saliente[indicador] = "↔";
                    break;
                case lista_entrante[indicador] = "á":
                    lista_saliente[indicador] = "▲";
                    break;
                case lista_entrante[indicador] = " ":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "undefined":
                    lista_saliente[indicador] = "undefined";
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

        entrada = document.querySelector("#entrada-datos").value;
        lista_entrante = entrada.split("");
        console.log(lista_entrante);

        while (indicador < lista_entrante.length) {
            switch (lista_entrante[indicador]) {
                case lista_entrante[indicador] = "!":
                    lista_saliente[indicador] = "´";
                    break;
                case lista_entrante[indicador] = "":
                    lista_saliente[indicador] = "¹";
                    break;
                case lista_entrante[indicador] = "#":
                    lista_saliente[indicador] = "▀";
                    break;
                case lista_entrante[indicador] = "$":
                    lista_saliente[indicador] = "¼";
                    break;
                case lista_entrante[indicador] = "%":
                    lista_saliente[indicador] = "Ñ";
                    break;
                case lista_entrante[indicador] = "&":
                    lista_saliente[indicador] = "v";
                    break;
                case lista_entrante[indicador] = "'":
                    lista_saliente[indicador] = "☺";
                    break;
                case lista_entrante[indicador] = "(":
                    lista_saliente[indicador] = "├";
                    break;
                case lista_entrante[indicador] = ")":
                    lista_saliente[indicador] = "Ó";
                    break;
                case lista_entrante[indicador] = "*":
                    lista_saliente[indicador] = "┬";
                    break;
                case lista_entrante[indicador] = "+":
                    lista_saliente[indicador] = "p";
                    break;
                case lista_entrante[indicador] = ",":
                    lista_saliente[indicador] = "×";
                    break;
                case lista_entrante[indicador] = "-":
                    lista_saliente[indicador] = "<";
                    break;
                case lista_entrante[indicador] = ".":
                    lista_saliente[indicador] = "¢";
                    break;
                case lista_entrante[indicador] = "/":
                    lista_saliente[indicador] = "ô";
                    break;
                case lista_entrante[indicador] = "0":
                    lista_saliente[indicador] = "R";
                    break;
                case lista_entrante[indicador] = "1":
                    lista_saliente[indicador] = "¥";
                    break;
                case lista_entrante[indicador] = "2":
                    lista_saliente[indicador] = "m";
                    break;
                case lista_entrante[indicador] = "3":
                    lista_saliente[indicador] = "♪";
                    break;
                case lista_entrante[indicador] = "4":
                    lista_saliente[indicador] = "Ú";
                    break;
                case lista_entrante[indicador] = "5":
                    lista_saliente[indicador] = "ë";
                    break;
                case lista_entrante[indicador] = "6":
                    lista_saliente[indicador] = "h";
                    break;
                case lista_entrante[indicador] = "7":
                    lista_saliente[indicador] = "ú";
                    break;
                case lista_entrante[indicador] = "8":
                    lista_saliente[indicador] = "S";
                    break;
                case lista_entrante[indicador] = "9":
                    lista_saliente[indicador] = "d";
                    break;
                case lista_entrante[indicador] = ":":
                    lista_saliente[indicador] = "┼";
                    break;
                case lista_entrante[indicador] = ";":
                    lista_saliente[indicador] = "¤";
                    break;
                case lista_entrante[indicador] = "<":
                    lista_saliente[indicador] = "l";
                    break;
                case lista_entrante[indicador] = "=":
                    lista_saliente[indicador] = "å";
                    break;
                case lista_entrante[indicador] = ">":
                    lista_saliente[indicador] = "↓";
                    break;
                case lista_entrante[indicador] = "?":
                    lista_saliente[indicador] = "•";
                    break;
                case lista_entrante[indicador] = "@":
                    lista_saliente[indicador] = "Ê";
                    break;
                case lista_entrante[indicador] = "A":
                    lista_saliente[indicador] = "è";
                    break;
                case lista_entrante[indicador] = "B":
                    lista_saliente[indicador] = "♥";
                    break;
                case lista_entrante[indicador] = "C":
                    lista_saliente[indicador] = "¿";
                    break;
                case lista_entrante[indicador] = "D":
                    lista_saliente[indicador] = "Å";
                    break;
                case lista_entrante[indicador] = "E":
                    lista_saliente[indicador] = "g";
                    break;
                case lista_entrante[indicador] = "F":
                    lista_saliente[indicador] = "┘";
                    break;
                case lista_entrante[indicador] = "G":
                    lista_saliente[indicador] = "Á";
                    break;
                case lista_entrante[indicador] = "H":
                    lista_saliente[indicador] = "G";
                    break;
                case lista_entrante[indicador] = "I":
                    lista_saliente[indicador] = "";
                    break;
                case lista_entrante[indicador] = "J":
                    lista_saliente[indicador] = "#";
                    break;
                case lista_entrante[indicador] = "K":
                    lista_saliente[indicador] = "z";
                    break;
                case lista_entrante[indicador] = "L":
                    lista_saliente[indicador] = "┤";
                    break;
                case lista_entrante[indicador] = "M":
                    lista_saliente[indicador] = "♦";
                    break;
                case lista_entrante[indicador] = "N":
                    lista_saliente[indicador] = "©";
                    break;
                case lista_entrante[indicador] = "O":
                    lista_saliente[indicador] = "·";
                    break;
                case lista_entrante[indicador] = "P":
                    lista_saliente[indicador] = "░";
                    break;
                case lista_entrante[indicador] = "Q":
                    lista_saliente[indicador] = "t";
                    break;
                case lista_entrante[indicador] = "R":
                    lista_saliente[indicador] = "H";
                    break;
                case lista_entrante[indicador] = "S":
                    lista_saliente[indicador] = "╚";
                    break;
                case lista_entrante[indicador] = "T":
                    lista_saliente[indicador] = "☼";
                    break;
                case lista_entrante[indicador] = "U":
                    lista_saliente[indicador] = "V";
                    break;
                case lista_entrante[indicador] = "V":
                    lista_saliente[indicador] = "Q";
                    break;
                case lista_entrante[indicador] = "W":
                    lista_saliente[indicador] = "_";
                    break;
                case lista_entrante[indicador] = "X":
                    lista_saliente[indicador] = "ï";
                    break;
                case lista_entrante[indicador] = "Y":
                    lista_saliente[indicador] = "²";
                    break;
                case lista_entrante[indicador] = "Z":
                    lista_saliente[indicador] = "2";
                    break;
                case lista_entrante[indicador] = "[":
                    lista_saliente[indicador] = "D";
                    break;
                case lista_entrante[indicador] = "":
                    lista_saliente[indicador] = "â";
                    break;
                case lista_entrante[indicador] = "]":
                    lista_saliente[indicador] = "↑";
                    break;
                case lista_entrante[indicador] = "^":
                    lista_saliente[indicador] = "Ì";
                    break;
                case lista_entrante[indicador] = "_":
                    lista_saliente[indicador] = "Ý";
                    break;
                case lista_entrante[indicador] = "`":
                    lista_saliente[indicador] = "¾";
                    break;
                case lista_entrante[indicador] = "a":
                    lista_saliente[indicador] = "═";
                    break;
                case lista_entrante[indicador] = "b":
                    lista_saliente[indicador] = "i";
                    break;
                case lista_entrante[indicador] = "c":
                    lista_saliente[indicador] = "♫";
                    break;
                case lista_entrante[indicador] = "d":
                    lista_saliente[indicador] = "♂";
                    break;
                case lista_entrante[indicador] = "e":
                    lista_saliente[indicador] = "ç";
                    break;
                case lista_entrante[indicador] = "f":
                    lista_saliente[indicador] = "¸";
                    break;
                case lista_entrante[indicador] = "g":
                    lista_saliente[indicador] = "Ò";
                    break;
                case lista_entrante[indicador] = "h":
                    lista_saliente[indicador] = "K";
                    break;
                case lista_entrante[indicador] = "i":
                    lista_saliente[indicador] = "╩";
                    break;
                case lista_entrante[indicador] = "j":
                    lista_saliente[indicador] = "5";
                    break;
                case lista_entrante[indicador] = "k":
                    lista_saliente[indicador] = "J";
                    break;
                case lista_entrante[indicador] = "l":
                    lista_saliente[indicador] = "→";
                    break;
                case lista_entrante[indicador] = "m":
                    lista_saliente[indicador] = "Z";
                    break;
                case lista_entrante[indicador] = "n":
                    lista_saliente[indicador] = "`";
                    break;
                case lista_entrante[indicador] = "o":
                    lista_saliente[indicador] = "█";
                    break;
                case lista_entrante[indicador] = "p":
                    lista_saliente[indicador] = "─";
                    break;
                case lista_entrante[indicador] = "q":
                    lista_saliente[indicador] = "ÿ";
                    break;
                case lista_entrante[indicador] = "r":
                    lista_saliente[indicador] = "←";
                    break;
                case lista_entrante[indicador] = "s":
                    lista_saliente[indicador] = "ü";
                    break;
                case lista_entrante[indicador] = "t":
                    lista_saliente[indicador] = "1";
                    break;
                case lista_entrante[indicador] = "u":
                    lista_saliente[indicador] = "╣";
                    break;
                case lista_entrante[indicador] = "v":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "w":
                    lista_saliente[indicador] = "Ö";
                    break;
                case lista_entrante[indicador] = "x":
                    lista_saliente[indicador] = "ê";
                    break;
                case lista_entrante[indicador] = "y":
                    lista_saliente[indicador] = "╔";
                    break;
                case lista_entrante[indicador] = "z":
                    lista_saliente[indicador] = "y";
                    break;
                case lista_entrante[indicador] = "{":
                    lista_saliente[indicador] = "9";
                    break;
                case lista_entrante[indicador] = "|":
                    lista_saliente[indicador] = "↕";
                    break;
                case lista_entrante[indicador] = "}":
                    lista_saliente[indicador] = "Ï";
                    break;
                case lista_entrante[indicador] = "~":
                    lista_saliente[indicador] = "é";
                    break;
                case lista_entrante[indicador] = " ":
                    lista_saliente[indicador] = "4";
                    break;
                case lista_entrante[indicador] = "Ç":
                    lista_saliente[indicador] = "☻";
                    break;
                case lista_entrante[indicador] = "ü":
                    lista_saliente[indicador] = "Þ";
                    break;
                case lista_entrante[indicador] = "é":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "â":
                    lista_saliente[indicador] = "'";
                    break;
                case lista_entrante[indicador] = "ä":
                    lista_saliente[indicador] = ">";
                    break;
                case lista_entrante[indicador] = "à":
                    lista_saliente[indicador] = "▄";
                    break;
                case lista_entrante[indicador] = "å":
                    lista_saliente[indicador] = "►";
                    break;
                case lista_entrante[indicador] = "ç":
                    lista_saliente[indicador] = "ö";
                    break;
                case lista_entrante[indicador] = "ê":
                    lista_saliente[indicador] = "~";
                    break;
                case lista_entrante[indicador] = "ë":
                    lista_saliente[indicador] = ",";
                    break;
                case lista_entrante[indicador] = "è":
                    lista_saliente[indicador] = "k";
                    break;
                case lista_entrante[indicador] = "ï":
                    lista_saliente[indicador] = "Ô";
                    break;
                case lista_entrante[indicador] = "î":
                    lista_saliente[indicador] = "^";
                    break;
                case lista_entrante[indicador] = "ì":
                    lista_saliente[indicador] = "À";
                    break;
                case lista_entrante[indicador] = "Ä":
                    lista_saliente[indicador] = "/";
                    break;
                case lista_entrante[indicador] = "Å":
                    lista_saliente[indicador] = "?";
                    break;
                case lista_entrante[indicador] = "É":
                    lista_saliente[indicador] = "T";
                    break;
                case lista_entrante[indicador] = "æ":
                    lista_saliente[indicador] = "7";
                    break;
                case lista_entrante[indicador] = "Æ":
                    lista_saliente[indicador] = "ƒ";
                    break;
                case lista_entrante[indicador] = "ô":
                    lista_saliente[indicador] = "q";
                    break;
                case lista_entrante[indicador] = "ö":
                    lista_saliente[indicador] = "j";
                    break;
                case lista_entrante[indicador] = "ò":
                    lista_saliente[indicador] = "♀";
                    break;
                case lista_entrante[indicador] = "û":
                    lista_saliente[indicador] = "í";
                    break;
                case lista_entrante[indicador] = "ù":
                    lista_saliente[indicador] = "6";
                    break;
                case lista_entrante[indicador] = "ÿ":
                    lista_saliente[indicador] = "+";
                    break;
                case lista_entrante[indicador] = "Ö":
                    lista_saliente[indicador] = "¯";
                    break;
                case lista_entrante[indicador] = "Ü":
                    lista_saliente[indicador] = "½";
                    break;
                case lista_entrante[indicador] = "ø":
                    lista_saliente[indicador] = "-";
                    break;
                case lista_entrante[indicador] = "£":
                    lista_saliente[indicador] = "Ç";
                    break;
                case lista_entrante[indicador] = "Ø":
                    lista_saliente[indicador] = "Î";
                    break;
                case lista_entrante[indicador] = "×":
                    lista_saliente[indicador] = "{";
                    break;
                case lista_entrante[indicador] = "ƒ":
                    lista_saliente[indicador] = ".";
                    break;
                case lista_entrante[indicador] = "á":
                    lista_saliente[indicador] = "○";
                    break;
                case lista_entrante[indicador] = "í":
                    lista_saliente[indicador] = "M";
                    break;
                case lista_entrante[indicador] = "ó":
                    lista_saliente[indicador] = "W";
                    break;
                case lista_entrante[indicador] = "ú":
                    lista_saliente[indicador] = "[";
                    break;
                case lista_entrante[indicador] = "ñ":
                    lista_saliente[indicador] = "]";
                    break;
                case lista_entrante[indicador] = "Ñ":
                    lista_saliente[indicador] = "ò";
                    break;
                case lista_entrante[indicador] = "ª":
                    lista_saliente[indicador] = "◙";
                    break;
                case lista_entrante[indicador] = "º":
                    lista_saliente[indicador] = "$";
                    break;
                case lista_entrante[indicador] = "¿":
                    lista_saliente[indicador] = "¨";
                    break;
                case lista_entrante[indicador] = "®":
                    lista_saliente[indicador] = "Â";
                    break;
                case lista_entrante[indicador] = "¬":
                    lista_saliente[indicador] = "ì";
                    break;
                case lista_entrante[indicador] = "½":
                    lista_saliente[indicador] = "F";
                    break;
                case lista_entrante[indicador] = "¼":
                    lista_saliente[indicador] = "╠";
                    break;
                case lista_entrante[indicador] = "¡":
                    lista_saliente[indicador] = "Ä";
                    break;
                case lista_entrante[indicador] = "«":
                    lista_saliente[indicador] = "ß";
                    break;
                case lista_entrante[indicador] = "»":
                    lista_saliente[indicador] = "Ë";
                    break;
                case lista_entrante[indicador] = "░":
                    lista_saliente[indicador] = "»";
                    break;
                case lista_entrante[indicador] = "▒":
                    lista_saliente[indicador] = "‗";
                    break;
                case lista_entrante[indicador] = "▓":
                    lista_saliente[indicador] = "Ð";
                    break;
                case lista_entrante[indicador] = "│":
                    lista_saliente[indicador] = "╬";
                    break;
                case lista_entrante[indicador] = "┤":
                    lista_saliente[indicador] = "Ù";
                    break;
                case lista_entrante[indicador] = "Á":
                    lista_saliente[indicador] = "|";
                    break;
                case lista_entrante[indicador] = "Â":
                    lista_saliente[indicador] = "Ã";
                    break;
                case lista_entrante[indicador] = "À":
                    lista_saliente[indicador] = "ª";
                    break;
                case lista_entrante[indicador] = "©":
                    lista_saliente[indicador] = "Í";
                    break;
                case lista_entrante[indicador] = "╣":
                    lista_saliente[indicador] = "┌";
                    break;
                case lista_entrante[indicador] = "║":
                    lista_saliente[indicador] = "Ü";
                    break;
                case lista_entrante[indicador] = "╗":
                    lista_saliente[indicador] = "O";
                    break;
                case lista_entrante[indicador] = "╝":
                    lista_saliente[indicador] = "a";
                    break;
                case lista_entrante[indicador] = "¢":
                    lista_saliente[indicador] = "0";
                    break;
                case lista_entrante[indicador] = "¥":
                    lista_saliente[indicador] = ")";
                    break;
                case lista_entrante[indicador] = "┐":
                    lista_saliente[indicador] = "&";
                    break;
                case lista_entrante[indicador] = "└":
                    lista_saliente[indicador] = "ã";
                    break;
                case lista_entrante[indicador] = "┴":
                    lista_saliente[indicador] = "↨";
                    break;
                case lista_entrante[indicador] = "┬":
                    lista_saliente[indicador] = "=";
                    break;
                case lista_entrante[indicador] = "├":
                    lista_saliente[indicador] = "Ø";
                    break;
                case lista_entrante[indicador] = "─":
                    lista_saliente[indicador] = "3";
                    break;
                case lista_entrante[indicador] = "┼":
                    lista_saliente[indicador] = "r";
                    break;
                case lista_entrante[indicador] = "ã":
                    lista_saliente[indicador] = "¶";
                    break;
                case lista_entrante[indicador] = "Ã":
                    lista_saliente[indicador] = "╝";
                    break;
                case lista_entrante[indicador] = "╚":
                    lista_saliente[indicador] = "ù";
                    break;
                case lista_entrante[indicador] = "╔":
                    lista_saliente[indicador] = "╦";
                    break;
                case lista_entrante[indicador] = "╩":
                    lista_saliente[indicador] = "þ";
                    break;
                case lista_entrante[indicador] = "╦":
                    lista_saliente[indicador] = "U";
                    break;
                case lista_entrante[indicador] = "╠":
                    lista_saliente[indicador] = "o";
                    break;
                case lista_entrante[indicador] = "═":
                    lista_saliente[indicador] = "®";
                    break;
                case lista_entrante[indicador] = "╬":
                    lista_saliente[indicador] = "◘";
                    break;
                case lista_entrante[indicador] = "¤":
                    lista_saliente[indicador] = "N";
                    break;
                case lista_entrante[indicador] = "ð":
                    lista_saliente[indicador] = "§";
                    break;
                case lista_entrante[indicador] = "Ð":
                    lista_saliente[indicador] = "¶";
                    break;
                case lista_entrante[indicador] = "Ê":
                    lista_saliente[indicador] = "║";
                    break;
                case lista_entrante[indicador] = "Ë":
                    lista_saliente[indicador] = "ð";
                    break;
                case lista_entrante[indicador] = "È":
                    lista_saliente[indicador] = "É";
                    break;
                case lista_entrante[indicador] = "ı":
                    lista_saliente[indicador] = "f";
                    break;
                case lista_entrante[indicador] = "Í":
                    lista_saliente[indicador] = "8";
                    break;
                case lista_entrante[indicador] = "Î":
                    lista_saliente[indicador] = "È";
                    break;
                case lista_entrante[indicador] = "Ï":
                    lista_saliente[indicador] = "I";
                    break;
                case lista_entrante[indicador] = "┘":
                    lista_saliente[indicador] = "└";
                    break;
                case lista_entrante[indicador] = "┌":
                    lista_saliente[indicador] = "e";
                    break;
                case lista_entrante[indicador] = "█":
                    lista_saliente[indicador] = "ñ";
                    break;
                case lista_entrante[indicador] = "▄":
                    lista_saliente[indicador] = "╗";
                    break;
                case lista_entrante[indicador] = "¦":
                    lista_saliente[indicador] = "@";
                    break;
                case lista_entrante[indicador] = "Ì":
                    lista_saliente[indicador] = "ı";
                    break;
                case lista_entrante[indicador] = "▀":
                    lista_saliente[indicador] = "ó";
                    break;
                case lista_entrante[indicador] = "Ó":
                    lista_saliente[indicador] = "♠";
                    break;
                case lista_entrante[indicador] = "ß":
                    lista_saliente[indicador] = "▒";
                    break;
                case lista_entrante[indicador] = "Ô":
                    lista_saliente[indicador] = "ä";
                    break;
                case lista_entrante[indicador] = "Ò":
                    lista_saliente[indicador] = "u";
                    break;
                case lista_entrante[indicador] = "õ":
                    lista_saliente[indicador] = "°";
                    break;
                case lista_entrante[indicador] = "Õ":
                    lista_saliente[indicador] = "";
                    break;
                case lista_entrante[indicador] = "µ":
                    lista_saliente[indicador] = "↔";
                    break;
                case lista_entrante[indicador] = "þ":
                    lista_saliente[indicador] = "³";
                    break;
                case lista_entrante[indicador] = "Þ":
                    lista_saliente[indicador] = "û";
                    break;
                case lista_entrante[indicador] = "Ú":
                    lista_saliente[indicador] = "▓";
                    break;
                case lista_entrante[indicador] = "Û":
                    lista_saliente[indicador] = "x";
                    break;
                case lista_entrante[indicador] = "Ù":
                    lista_saliente[indicador] = "î";
                    break;
                case lista_entrante[indicador] = "ý":
                    lista_saliente[indicador] = "¦";
                    break;
                case lista_entrante[indicador] = "Ý":
                    lista_saliente[indicador] = "s";
                    break;
                case lista_entrante[indicador] = "¯":
                    lista_saliente[indicador] = "ý";
                    break;
                case lista_entrante[indicador] = "´":
                    lista_saliente[indicador] = "E";
                    break;
                case lista_entrante[indicador] = "±":
                    lista_saliente[indicador] = "Æ";
                    break;
                case lista_entrante[indicador] = "‗":
                    lista_saliente[indicador] = "Y";
                    break;
                case lista_entrante[indicador] = "¾":
                    lista_saliente[indicador] = "▬";
                    break;
                case lista_entrante[indicador] = "¶":
                    lista_saliente[indicador] = "!";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = "-";
                    break;
                case lista_entrante[indicador] = "÷":
                    lista_saliente[indicador] = "♣";
                    break;
                case lista_entrante[indicador] = "¸":
                    lista_saliente[indicador] = "w";
                    break;
                case lista_entrante[indicador] = "°":
                    lista_saliente[indicador] = "%";
                    break;
                case lista_entrante[indicador] = "¨":
                    lista_saliente[indicador] = "∟";
                    break;
                case lista_entrante[indicador] = "·":
                    lista_saliente[indicador] = "‼";
                    break;
                case lista_entrante[indicador] = "¹":
                    lista_saliente[indicador] = "A";
                    break;
                case lista_entrante[indicador] = "³":
                    lista_saliente[indicador] = "Û";
                    break;
                case lista_entrante[indicador] = "²":
                    lista_saliente[indicador] = "¬";
                    break;
                case lista_entrante[indicador] = "■":
                    lista_saliente[indicador] = "L";
                    break;
                case lista_entrante[indicador] = "☺":
                    lista_saliente[indicador] = "æ";
                    break;
                case lista_entrante[indicador] = "☻":
                    lista_saliente[indicador] = "(";
                    break;
                case lista_entrante[indicador] = "♥":
                    lista_saliente[indicador] = "▲";
                    break;
                case lista_entrante[indicador] = "♦":
                    lista_saliente[indicador] = "c";
                    break;
                case lista_entrante[indicador] = "♣":
                    lista_saliente[indicador] = "õ";
                    break;
                case lista_entrante[indicador] = "♠":
                    lista_saliente[indicador] = "÷";
                    break;
                case lista_entrante[indicador] = "•":
                    lista_saliente[indicador] = "ø";
                    break;
                case lista_entrante[indicador] = "◘":
                    lista_saliente[indicador] = "C";
                    break;
                case lista_entrante[indicador] = "○":
                    lista_saliente[indicador] = "◄";
                    break;
                case lista_entrante[indicador] = "◙":
                    lista_saliente[indicador] = "n";
                    break;
                case lista_entrante[indicador] = "♂":
                    lista_saliente[indicador] = "º";
                    break;
                case lista_entrante[indicador] = "♀":
                    lista_saliente[indicador] = "┐";
                    break;
                case lista_entrante[indicador] = "♪":
                    lista_saliente[indicador] = "«";
                    break;
                case lista_entrante[indicador] = "♫":
                    lista_saliente[indicador] = "■";
                    break;
                case lista_entrante[indicador] = "☼":
                    lista_saliente[indicador] = "│";
                    break;
                case lista_entrante[indicador] = "►":
                    lista_saliente[indicador] = "}";
                    break;
                case lista_entrante[indicador] = "◄":
                    lista_saliente[indicador] = "B";
                    break;
                case lista_entrante[indicador] = "↕":
                    lista_saliente[indicador] = "£";
                    break;
                case lista_entrante[indicador] = "‼":
                    lista_saliente[indicador] = "±";
                    break;
                case lista_entrante[indicador] = "¶":
                    lista_saliente[indicador] = "*";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = "b";
                    break;
                case lista_entrante[indicador] = "▬":
                    lista_saliente[indicador] = "X";
                    break;
                case lista_entrante[indicador] = "↨":
                    lista_saliente[indicador] = "┴";
                    break;
                case lista_entrante[indicador] = "↑":
                    lista_saliente[indicador] = "à";
                    break;
                case lista_entrante[indicador] = "↓":
                    lista_saliente[indicador] = ";";
                    break;
                case lista_entrante[indicador] = "→":
                    lista_saliente[indicador] = "µ";
                    break;
                case lista_entrante[indicador] = "←":
                    lista_saliente[indicador] = "¡";
                    break;
                case lista_entrante[indicador] = "∟":
                    lista_saliente[indicador] = "Õ";
                    break;
                case lista_entrante[indicador] = "↔":
                    lista_saliente[indicador] = ":";
                    break;
                case lista_entrante[indicador] = "▲":
                    lista_saliente[indicador] = "á";
                    break;
                case lista_entrante[indicador] = "§":
                    lista_saliente[indicador] = " ";
                    break;
                case lista_entrante[indicador] = "undefined":
                    lista_saliente[indicador] = "undefined";
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


    // Proceso con codigo de caracteres 

    // Variables
    let codigo_ascii = [
        '´',
        '¹',
        '▀',
        '¼',
        'Ñ',
        'v',
        '☺',
        '├',
        'Ó',
        '┬',
        'p',
        '×',
        '<',
        '¢',
        'ô',
        'R',
        '¥',
        'm',
        '♪',
        'Ú',
        'ë',
        'h',
        'ú',
        'S',
        'd',
        '┼',
        '¤',
        'l',
        'å',
        '↓',
        '•',
        'Ê',
        'è',
        '♥',
        '¿',
        'Å',
        'g',
        '┘',
        'Á',
        'G',
        '\"',
        '#',
        'z',
        '┤',
        '♦',
        '©',
        '·',
        '░',
        't',
        'H',
        '╚',
        '☼',
        'V',
        'Q',
        '_',
        'ï',
        '²',
        '2',
        'D',
        'â',
        '↑',
        'Ì',
        'Ý',
        '¾',
        '═',
        'i',
        '♫',
        '♂',
        'ç',
        '¸',
        'Ò',
        'K',
        '╩',
        '5',
        'J',
        '→',
        'Z',
        '`',
        '█',
        '─',
        'ÿ',
        '←',
        'ü',
        '1',
        '╣',
        '§',
        'Ö',
        'ê',
        '╔',
        'y',
        '9',
        '↕',
        'Ï',
        'é',
        '4',
        '☻',
        'Þ',
        '§',
        "'",
        '>',
        '▄',
        '►',
        'ö',
        '~',
        ',',
        'k',
        'Ô',
        '^',
        'À',
        '/',
        '?',
        'T',
        '7',
        'ƒ',
        'q',
        'j',
        '♀',
        'í',
        '6',
        '+',
        '¯',
        '½',
        '-',
        'Ç',
        'Î',
        '{',
        '.',
        '○',
        'M',
        'W',
        '[',
        ']',
        'ò',
        '◙',
        '$',
        '¨',
        'Â',
        'ì',
        'F',
        '╠',
        'Ä',
        'ß',
        'Ë',
        '»',
        '‗',
        'Ð',
        '╬',
        'Ù',
        '|',
        'Ã',
        'ª',
        'Í',
        '┌',
        'Ü',
        'O',
        'a',
        '0',
        ')',
        '&',
        'ã',
        '↨',
        '=',
        'Ø',
        '3',
        'r',
        '¶',
        '╝',
        'ù',
        '╦',
        'þ',
        'U',
        'o',
        '®',
        '◘',
        'N',
        '§',
        '¶',
        '║',
        'ð',
        'É',
        'f',
        '8',
        'È',
        'I',
        '└',
        'e',
        'ñ',
        '╗',
        '@',
        'ı',
        'ó',
        '♠',
        '▒',
        'ä',
        'u',
        '°',
        '"',
        '↔',
        '³',
        'û',
        '▓',
        'x',
        'î',
        '¦',
        's',
        'ý',
        'E',
        'Æ',
        'Y',
        '▬',
        '!',
        'P',
        '♣',
        'w',
        '%',
        '∟',
        '‼',
        'A',
        'Û',
        '¬',
        'L',
        'æ',
        '(',
        '▲',
        'c',
        'õ',
        '÷',
        'ø',
        'C',
        '◄',
        'n',
        'º',
        '┐',
        '«',
        '■',
        '│',
        '}',
        'B',
        '£',
        '±',
        '*',
        'b',
        'X',
        '┴',
        'à',
        ';',
        'µ',
        '¡',
        'Õ',
        ':',
        'á',
        ' '
    ];

    let codigo_ascii_mod = [
        '!',
        '"',
        '#',
        '$',
        '%',
        '&',
        "'",
        '(',
        ')',
        '*',
        '+',
        ',',
        '-',
        '.',
        '/',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '@',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        '[',
        '\"',
        ']',
        '^',
        '_',
        '`',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        '{',
        '|',
        '}',
        '~',
        ' ',
        'Ç',
        'ü',
        'é',
        'â',
        'ä',
        'à',
        'å',
        'ç',
        'ê',
        'ë',
        'è',
        'ï',
        'î',
        'ì',
        'Ä',
        'Å',
        'É',
        'æ',
        'Æ',
        'ô',
        'ö',
        'ò',
        'û',
        'ù',
        'ÿ',
        'Ö',
        'Ü',
        'ø',
        '£',
        'Ø',
        '×',
        'ƒ',
        'á',
        'í',
        'ó',
        'ú',
        'ñ',
        'Ñ',
        'ª',
        'º',
        '¿',
        '®',
        '¬',
        '½',
        '¼',
        '¡',
        '«',
        '»',
        '░',
        '▒',
        '▓',
        '│',
        '┤',
        'Á',
        'Â',
        'À',
        '©',
        '╣',
        '║',
        '╗',
        '╝',
        '¢',
        '¥',
        '┐',
        '└',
        '┴',
        '┬',
        '├',
        '─',
        '┼',
        'ã',
        'Ã',
        '╚',
        '╔',
        '╩',
        '╦',
        '╠',
        '═',
        '╬',
        '¤',
        'ð',
        'Ð',
        'Ê',
        'Ë',
        'È',
        'ı',
        'Í',
        'Î',
        'Ï',
        '┘',
        '┌',
        '█',
        '▄',
        '¦',
        'Ì',
        '▀',
        'Ó',
        'ß',
        'Ô',
        'Ò',
        'õ',
        'Õ',
        'µ',
        'þ',
        'Þ',
        'Ú',
        'Û',
        'Ù',
        'ý',
        'Ý',
        '¯',
        '´',
        '±',
        '‗',
        '¾',
        '¶',
        '§',
        '÷',
        '¸',
        '°',
        '¨',
        '·',
        '¹',
        '³',
        '²',
        '■',
        '☺',
        '☻',
        '♥',
        '♦',
        '♣',
        '♠',
        '•',
        '◘',
        '○',
        '◙',
        '♂',
        '♀',
        '♪',
        '♫',
        '☼',
        '►',
        '◄',
        '↕',
        '‼',
        '¶',
        '§',
        '▬',
        '↨',
        '↑',
        '↓',
        '→',
        '←',
        '∟',
        '↔',
        '▲',
        '§',

    ];

    let ascii_Salida = "";

    for (let i = 0; i < 253; i++) {
        ascii_Salida += "case lista_entrante[indicador] = " + "\"" + codigo_ascii_mod[i] + "\"" + " : " + " \n "
            + "lista_saliente[indicador] = " + "\"" + codigo_ascii[i] + "\"" + " ; " + " \n "
            + " break; " + " \n ";
    }

    console.log(ascii_Salida);

} catch (error) {
    alert("Lo lamentamos, ah ocurrido un error!")
}