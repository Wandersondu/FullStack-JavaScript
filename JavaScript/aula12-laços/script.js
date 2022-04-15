/*
for(let contador = 0; contador <= 500; contador++){
document.write('Hello World')

}

*/


let opçoes

for(let contador = 1990; contador <= 2022; contador++){
    opçoes =`<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opçoes
