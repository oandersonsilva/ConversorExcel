class Processor {
  static process(data) {
    var linhas = data.split('\n')

    var rows = []
    linhas.forEach(row => {
      var linha = row.split(',')
      rows.push(linha)
    })
    var titulo = rows[0]
    return rows
  }
}

module.exports = Processor
