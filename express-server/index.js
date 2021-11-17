const express = require('express')
const path = require('path')
const app = express()


// Definindo o template engine
app.set('view engine', 'ejs')


// Definindo os aquivos estáticos
//app.use(express.static(path.join(__dirname, 'views')))


// Definindo os aquivos públicos
app.use(express.static(path.join(__dirname, 'public')))



// Rotas
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Digital Tech - Home'
    })
})


app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Digital Tech - Post'
    })
})

app.get('/', (req, res) => {
    res.render('navbar')
})



// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})




// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))