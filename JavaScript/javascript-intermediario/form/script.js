


let formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(evento){
    evento.preventDefault()  // não deixa abrir em outra página.


    let temErro = false
    
    let inputNome = document.forms['formCadastro']['nome']

    if (!inputNome.value) {
        temErro = true
        inputNome.classList.add('inputError')

        let span = (inputNome.nextSibling.nextSibling)
        span.innerText = " Digite o nome corretamente"
    } else {
        inputNome.classList.remove('inputError')

        let span = (inputNome.nextSibling.nextSibling)
        span.innerText = ""
    }



    let inputEmail = document.forms['formCadastro']['email']

    if (!inputEmail.value) {
        temErro = true
        inputEmail.classList.add('inputError')

        let span = (inputEmail.nextSibling.nextSibling)
        span.innerText = " Digite o E-mail corretamente"
    } else {
        inputEmail.classList.remove('inputError')

        let span = (inputEmail.nextSibling.nextSibling)
        span.innerText = ''
    }



    let selectCidade = document.forms['formCadastro']['cidade']

    if (!selectCidade.value) {
        temErro = true
        selectCidade.classList.add('inputError')

        let span = (selectCidade.nextSibling.nextSibling)
        span.innerText = " Selecione uma Cidade"
    } else {
        selectCidade.classList.remove('InputError')

        let span = (selectCidade.nextSibling.nextSibling)
        span.innerText = ""
    }

    if (!temErro)
    formulario.onsubmit()

0}