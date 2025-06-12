const listaDeOperacoes = []


exports.save = function (req, res) {
    let data = req.body
    console.log(data); 
    listaDeOperacoes.push(data) 
    res.redirect('/operacoes') 
}

exports.listaDeOperacoes = listaDeOperacoes