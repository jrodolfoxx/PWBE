const express = require('express')
const router = express.Router()

const operacaoController = require('../controllers/operacao-controller')

router.get('/', function (req, res) {
  res.render('pages/home',
    {
      title: 'Home',
      paginaAtiva: 'home'
    }
  );
});

router.get('/nova_operacao', function (req, res) {
  res.render('pages/nova_operacao',
    {
      title: 'Nova Operação',
      paginaAtiva: 'operacao'
    }
  );
})

router.get('/operacoes', function (req, res) {
  res.render('pages/operacoes',
    {
      title: 'Operações',
      paginaAtiva: 'operacao',
      operacoes: operacaoController.listaDeOperacoes
    }
  );
})

router.post('/salvar_operacao', operacaoController.save)

module.exports = router