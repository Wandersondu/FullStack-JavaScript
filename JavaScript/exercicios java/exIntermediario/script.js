

let number = 0

const numberHtml = document.querySelector('#number')
const btnMenos = document.querySelector('#btn-Menos')
const btnMais = document.querySelector('#btn-Mais')

btnMenos.onClick = function() {
    number--
    numberHtml.innerText = number
}

btnMais.onClick = function() {
    number++
    numberHtml.innerText = number
}

