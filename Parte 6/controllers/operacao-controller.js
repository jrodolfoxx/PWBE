const listaDeOperacoes = []

const Operacao = require('../models/operacao')

exports.save = function (req, res) {
    const operacao = new Operacao(req.body)
    operacao.create()
    if (operacao.errors.length > 0){
        return res.send(operacao.errors)
    } else {
        listaDeOperacoes.push(operacao.data)
        res.redirect('/operacoes')
    }
}

exports.listaDeOperacoes = listaDeOperacoes