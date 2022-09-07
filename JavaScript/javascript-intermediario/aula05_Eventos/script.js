 
 /*
let btn = document.querySelector('#btn')

let contador = 0

function contar(){
    contador++
    console.log('Msg 1')

    if( contador >= 10){
        btn.removeEventListener('click', contar)
    }
}

*/


let quadrado = document.querySelector('.quadrado')

function minhaFucao(evento){
    console.log('evento')
}

//quadrado.onclick = minhaFucao

//quadrado.onclick = minhaFuncao

//quadrado.onmousemove = minhaFucao

window.addEventListener('keypress', minhaFucao)



