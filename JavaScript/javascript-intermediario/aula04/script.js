
let contador = document.querySelector('#contador')
let count = 0

setInterval(function(){
    count++
    contador.innerText = count
}, 1000)