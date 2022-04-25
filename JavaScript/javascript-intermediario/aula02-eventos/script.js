let quadrado = document.querySelector('.quadrado')

function teste(evento){
    console.log(evento.key) //copia as techas digitadas
}


window.addEventListener('keypress', teste)
