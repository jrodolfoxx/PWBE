const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post('/ola', (req, res) => {
    nome = req.body.nome
    res.render('ola_resposta', {nome: nome})

})

router.get('/ola_form', (req, res) => {
    res.render('ola_form')
})

module.exports = router