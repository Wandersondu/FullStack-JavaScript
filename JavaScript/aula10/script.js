let inputNota1 = prompt('Primeira nota: ')
let inputNota2 = prompt('Segunda nota: ')

let nota1 = parseInt(inputNota1)
let nota2 = parseInt(inputNota2)

let mediaMinima = 7

let media = (nota1 + nota2) / 2

if (media >= mediaMinima) {
    document.write('você esta aprovado!')
} else if (media >= 8) {
    document.write('otima nota parabens!')
}


if (media >= mediaMinima && media === 10) {
    document.write('Nossa está de parabéns')
} else if (media >= mediaMinima && media === 9 ) {
    document.write('mandou bem!')
}