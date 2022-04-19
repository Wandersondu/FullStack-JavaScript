//querySelector - seleciona aoenas um elemento 
//queryselectoall  - seleciona mais elementos 

let menuMobile = document.querySelector('.menuMobile')
let botaoMenu = document.querySelector('.botaoMenu')

let aberto = false //flag controlando o abre e fecha45
function abreFecha(){

    if(aberto === true){
        aberto = false
        menuMobile.classList.remove('aberto')
        botaoMenu.innerText = 'Abrir Menu'
    } else if(aberto === false){
        aberto = true
        menuMobile.classList.add('aberto')
        botaoMenu.innerText = 'Fechar Menu'
    }

}