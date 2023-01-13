const fs = require('fs')
const util = require('util')

//var novaFuncaoComPromisse = util.promisify(funcaoVelhaComCallback)

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile)
  } //Construtor
  async Read(filepath) {
    try {
      return await this.reader(filepath, 'utf-8')
    } catch (err) {
      return undefined
    }
  }
}

//Classe sem promisify, necessário usar callback por não suportar promisses
class ReaderAntiga {
  Reader() {} //Construtor
  Read(filepath) {
    fs.readFile(filepath, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        console.log('error to read')
      } else {
        console.log(data)
      }
    })
  }
}

module.exports = Reader
