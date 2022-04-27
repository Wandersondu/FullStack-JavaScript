
let contador = document.querySelector('#contador')
let count = 0

let intervalo = setInterval(function(){
    count++
    contador.innerText = count
}, 1000)

let btn = document.querySelector('#btn')

btn.onClick = function(){
    clearInterval(intervalo)
}