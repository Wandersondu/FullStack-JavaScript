const http = require('http')
const fs = require('fs')

const server = http.createServer(function(request, response) {
    console.log(request.url)

    fs.readFile('../client/index.html', function(error, content) {

        response.end(content)
    })
    

})

server.listen(8080)
console.log('Servidor Ativo na porta 8080, Vamos codar')