const frutas = ["laranja", "limão", "uva"];

/*
for(let i=1; i<=fruta.length; i++){
    let item = document.getElementById(`fruta-${i}`)
    item.innerHTML = frutas[i-1]
}
*/


const frutaUm = document.getElementById("fruta-1")
frutaUm.innerHTML += frutas[0]

const frutaDois = document.getElementById("fruta-2")
frutaDois.innerHTML += frutas[1]

const frutaTres = document.getElementById("fruta-3")
frutaTres.innerHTML += frutas[2]

let frutaQuatro = document.getElementById("fruta")
console.log(frutaQuatro.value)

function adicioneFruta(){
    let frutaDoInput = document.getElementById("fruta").value
    console.log(frutaDoInput)
}

function adicioneLista(){
    const frutaExtra = document.getElementById("fruta-4")
    frutaExtra.innerHTML += document.getElementById("fruta").value
}