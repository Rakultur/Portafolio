// Ciclos

let a = 5,b = 0 ,c,d = "S";

// Condicionales

// If else

function VerdaderoFalso(numero){    
    if (numero === 5) {
        console.log(true)
    } else {
        console.log(false)
    }
}

// Switch case

function casos(numero){
    switch (numero){
        case 1 : console.log("Es : " + 1)
        break;
    }
}    

// ciclos

// For

function cicloFor (){
    for (let index = 0; index < 10 ; index++) {
        console.log(index+1)
    }
}

// For in

const persona = {
    Nombre : "Humano",
    Edad : 50 ,
    Estatura : 1.75

}

function cicloForIn(){
    for (const key in persona) {
        console.log(key)
    }
    
}

// For of

function cicloForOf(){
    for (const key of persona) {
        console.log(key)
    }
    
}


// While

function cicloWhile (index){
    while (index <= 10) {
        console.log(index);
        index++;
    }
}

// Do while

function cicloDoWhile (index){
    do {
        console.log(index);
        index++;
    } while (index<=10);
}

// Exepciones

function Exepciones(){
    try {
        console.log("Ejecucion con normalidad del programa")
        let a = 5, b = 0, r;
        
        console.log(r)
    } catch (error) {
        console.log("Error en la ejecución del programa")
    }
}

Exepciones()