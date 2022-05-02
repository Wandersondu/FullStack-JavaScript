/*

let nome = prompt('Qual é o nome do Piloto?')
alert('A velocidade da Nave é 0 Km')
let velocidade = prompt('Qual velocidade quer iniciar a navegação?')

if(velocidade <= 0){
    alert('Nave está parada. Iniciar propursores')
}else if(velocidade < 40 ) {
    alert('Velocidade baixa, Gostaria de almentar?')
}
else if(velocidade >= 40 || velocidade < 80 ) {
    alert('Parece uma boa velocidade')
}else if(velocidade >= 80 || velocidade < 100) {
    alert('Velocidade alta. Considere diminuir')
}

*/

let piloto = prompt('Qual é o nome do Piloto?')

let velocity = 0

let newVelocity = prompt('A que velocidade gostaria de acelerar?')
let confirmVelocity = confirm(`Estamos acelerando para ${newVelocity} Km/s `)

if(confirmVelocity) {
    velocity = newVelocity
}

if(velocity <= 0 ) {
    alert('Atenção nave parada. Qual velocidade gostaria iniciar.')
} else if(velocity < 40 ) {
        alert('Velocidade muito baixa. devemos almentar.')
    } else if( velocity < 80 ) {
            alert('Velocidade a níveis normais')
        } else if( velocity < 100 ) {
                alert('Velocidade alta, Motores aquecendo!')
            } else{
                alert('Velocidade muito alta. [Prepara para explosão do motor 1]')
            }
        
alert(`Piloto: ${piloto} \nVelocidade: ${velocity} Km/s`)