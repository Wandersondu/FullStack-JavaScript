 
 
 let btn = document.querySelector('#btn')

let contador = 0

function contar(){
    contador++
    console.log('Msg 1')

    if( contador >= 10){
        btn.removeEventListener('click', contar)
    }
}
