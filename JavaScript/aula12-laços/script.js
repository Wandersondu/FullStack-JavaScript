/*
for(let contador = 0; contador <= 500; contador++){
document.write('Hello World')

}

*/


let opçoes

for(let contador = 1; contador < 5; contador++){
    opçoes =`<option>${contador}</option>`
}

document.querySelector('#ano').innerHTML = opçoes
