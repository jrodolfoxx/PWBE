const express = require('express')
const app = express()
const port = 3000

app.set('views, views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/ola', (req, res) => {
    nome = req.body.nome
    res.render('ola_resposta', {nome: nome})
})

app.get('/ola_form', (req, res) => {
    res.render('ola_form')
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
