//criação de promessa

const { ConnectionStates } = require("mongoose")

const myPromise = new Promise ((resolve, reject) => {
    const nome = "Dutra"

    if (nome === "Dutra") {
        resolve("Usuário Dutra encontrado! ")
    } else {
        reject("O Usuário Dutra não foi encontrado!")
    }
})

myPromise.then((data) => {
    document.write(data)
})

// Encadeamento de then's

const myPromise2 = new Promise ((resolve, reject) => {
    const nome = "Peter"

    if ( nome === "Peter") {
        resolve("Usuário Peter encontrado! ")
    } else {
        reject("O Usuário Dutra não foi encontrado!")
    }

})

myPromise2
    .then ((data) => {
        return data.toLowerCase()
    })
    .then((stringModificada) => {
        document.write(stringModificada)
    }) 


// Retorno do catch


const myPromise3 = new Promise ((resolve, reject) => {
    const nome = "Cleidiana"

    if ( nome === "Cleidiana") {
        resolve("Usuário Cleidiana encontrado! ")
    } else {
        reject("O Usuário Cleidiana não foi encontrado!")
    }

})

myPromise3
    .then ((data) => {
        document.write(data)
    })
    .catch ((err) => {
        document.write("Aconteceu um Erro: " + err )
    })


// Resolver várias promessas 

const p1 = new Promise((resolve, reject) => {
    resolve("P1 ok !")
})

const p2 = new Promise((resolve, reject) => {
    resolve("P1 ok !")
})

const p3 = new Promise((resolve, reject) => {
    resolve("P1 ok !")
})

const resolveAll = Promise.all([p1,p2,p3]).then((data) => {
    document.write(data)
})

