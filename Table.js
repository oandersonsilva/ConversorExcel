class Table {
  constructor(arr) {
    this.head = arr[0]
    arr.shift()
    this.rows = arr
  }

  // O "GET" obriga a função a retornar um valor, sendo acessada como um atributo, sem as chaves "()"
  get RowCount() {
    return this.rows.length
  }

  get ColumnCount() {
    return this.head.length
  }
}

module.exports = Table
