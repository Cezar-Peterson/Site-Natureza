img = document.querySelector("#butanona-img")
contador = 0

let propanona_sub = document.getElementById("sub-propanona");
let supers = document.getElementById("super")
let filtro_cetona = document.getElementById("filtro_cetona")
let filtro_eter = document.getElementById("filtro_eter")
let filtro_alcool = document.getElementById("filtro_alcool")
let filtro_acidos = document.getElementById("filtro_acidos")
let filtro_aldeidos = document.getElementById("filtro_aldeidos")
let filtro_ester = document.getElementById("filtro_ester")

supers.classList.add("aparece")

function ContarSegundos(){
    var segundos = 1;
    contador += segundos;
    console.log(contador);
     if (contador == 2) {
        img.setAttribute('src',"img/butanona2.jpg")
        
    } 
}
setInterval(ContarSegundos, 1000)

function sumirPropanona(){
    propanona_sub.classList.remove("some")
    propanona_sub.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
    
}

function propanona(){
    setInterval(sumirPropanona,1000)
    supers.classList.add("animar")
}


//FILTROS

const cetona = function(sum){
    switch(sum){
        case 'f-ce':
            filtroCetona();
            break;
        case 'f-et':
            filtroEter();
            break;
        case 'f-alc':
            filtroAlcool();
            break;
        case 'f-ac':
            filtroAcidos();
            break;
        case 'f-ald':
            filtroAldeidos();
            break;
        case 'f-es':
            filtroEster();
            break
    }
}

function filtroCetona(){
    setInterval(sumirCetona,1000)
    supers.classList.add("animar")
}
//CETONAS
    let Qpropanona = document.getElementById("propanona")
    let Qpropanona2 = document.getElementById("propanona-2")
    let Qbutanona = document.getElementById("butanona")
    let Qbenzoquin = document.getElementById("Benzoquin")


//ÉTERS
    let Qmetoxietano = document.getElementById("metoxietano")
    let Qdipropilico = document.getElementById("dipropilico")

//FILTROS PRÁTICA
function sumirCetona(){
   /*  Qpropanona.classList.add("some")
    Qpropanona.classList.remove("fun-org")
    Qpropanona2.classList.add("some")
    Qpropanona2.classList.remove("fun-org")
    Qbutanona.classList.add("some")
    Qbutanona.classList.remove("fun-org")
    Qbenzoquin.classList.add("some")
    Qbenzoquin.classList.remove("fun-org")
    Qmetoxietano.classList.add("some")
    Qmetoxietano.classList.remove("fun-org")
    Qdipropilico.classList.add("some")
    Qdipropilico.classList.remove("fun-org")
    

    Qpropanona.classList.remove("some")
    Qpropanona.classList.add("fun-org") */

    filtro_cetona.classList.remove("some")
    filtro_cetona.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
}

function filtroEter(){
    setInterval(sumirEter,1000)
    supers.classList.add("animar")
}

function sumirEter(){
     filtro_eter.classList.remove("some")
     filtro_eter.classList.add("aparece")
     supers.classList.remove("aparece")
     supers.classList.add("some")
 }

 function filtroAlcool(){
    setInterval(sumirAlcool,1000)
    supers.classList.add("animar")
 }
 function sumirAlcool(){
    filtro_alcool.classList.remove("some")
    filtro_alcool.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
}

function filtroAcidos(){
    setInterval(sumirAcidos,1000)
    supers.classList.add("animar")
 }
 function sumirAcidos(){
    filtro_acidos.classList.remove("some")
    filtro_acidos.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
}

function filtroAldeidos(){
    setInterval(sumirAldeidos,1000)
    supers.classList.add("animar")
 }
 function sumirAldeidos(){
    filtro_aldeidos.classList.remove("some")
    filtro_aldeidos.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
}

function filtroEster(){
    setInterval(sumirEster,1000)
    supers.classList.add("animar")
 }
 function sumirEster(){
    filtro_ester.classList.remove("some")
    filtro_ester.classList.add("aparece")
    supers.classList.remove("aparece")
    supers.classList.add("some")
}