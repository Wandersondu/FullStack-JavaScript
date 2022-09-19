

const clientes = [
    {name: 'Fulano', lastname: ' Silva'},
    {name: 'Ciclano', lastname: ' Da silva'},
    {name: 'Beltrano', lastname: ' Silva Silva'}
]

let clientesFinal = []

    clientes.forEach (function(cliente) {
        clientesFinal.push(cliente.name + ' ' + cliente.lastname)
    })

document.write(clientesFinal)
