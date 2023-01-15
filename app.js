const HtmlParser = require('./HtmlParser')
const Processor = require('./Processor')
const Reader = require('./Reader')
const Table = require('./Table')
const Writer = require('./Writer')

var leitor = new Reader()
var escritor = new Writer()

async function main() {
  var dados = await leitor.Read('./arquivo.csv')
  console.log(dados)
  var linhas = Processor.process(dados)

  var usuarios = new Table(linhas)

  var html = await HtmlParser.Parse(usuarios)
  console.log(html)

  escritor.Write(Date.now() + '.html', html)
}

main()
