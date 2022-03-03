
let opcoes

for (let contador = 1900; contador <= 2022; contador++) {
    opcoes = `<options> ${contador}</options>`
}

document.querySelector('#ano').innerHTML = opcoes