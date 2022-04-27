

let nome = prompt('Qual é o nome do Piloto?')
alert('A velocidade da Nave é 0 Km')
let velocidade = prompt('Qual velocidade quer iniciar a navegação?')

if(velocidade <= 0){
    alert('Nave está parada. Iniciar propursores')
}else if(velocidade < 40 ) {
    alert('Velocidade baixa, Gostaria de almentar?')
}else if(velocidade >= 40 || velocidade < 80 ) {
    alert('Parece uma boa velocidade')
}else if(velocidade >= 80 || velocidade < 100) {
    alert('Velocidade alta. Considere diminuir')
}