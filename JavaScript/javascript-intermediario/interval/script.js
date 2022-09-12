
let contador  = document.querySelector('.contador')
let count = 0

setInterval(function(){
    count++
    contador.innerText = count
}, 500 )

let pausar = document.querySelector('#pausar')
pausar.onClick = function (){
    clearInterval(intervalo)
}