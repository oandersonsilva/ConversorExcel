const Processor = require('./Processor')
const Reader = require('./Reader')

var leitor = new Reader()

async function main() {
  var dados = await leitor.Read('./arquivo.csv')
  console.log(dados)
  var linhas = Processor.process(dados)
  //titulo
  console.log(linhas[0])
  //demais linhas
  linhas.shift()
  console.log(linhas)
}

main()
