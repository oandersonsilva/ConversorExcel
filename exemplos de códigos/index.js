const fs = require('fs') //File-System ja vem instalado no NODE
const { stringify } = require('querystring')

//================================ LENDO UM ARQUIVO ======================================

fs.readFile('./arquivo.md', { encoding: 'utf-8' }, (erro, dados) => {
  if (erro) {
    console.log('deu erro')
  } else {
    console.log(dados)
  }
})

//================================ Escrever em um arquivo =====================================

var texto = 'texto'

fs.writeFile('./arquivo.md', 'texto', err => {
  if (err) {
    console.log('erro durante o salvamento')
  }
})

//================================= Alterando arquivo =========================================

function modificarUsuario(nome, idade, profissao) {
  fs.readFile('./arquivo.json', { encoding: 'utf-8' }, (erro, dados) => {
    if (erro) {
      console.log('Erro de leitura')
    } else {
      //convertendo arquivo de texto em JSON
      dados = JSON.parse(dados)
      dados.nome = nome
      dados.idade = idade
      dados.profissao = profissao
      fs.writeFile('./arquivo.json', JSON.stringify(dados), err => {
        if (err) {
          console.log('Erro no Salvamento')
        } else {
          console.log('Alteração feita com sucesso!')
        }
      })
    }
  })
}

modificarUsuario('Maick Brito', 31, 'Desenvolvedor FullStack')
