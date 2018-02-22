class View {
  static readAll(data) {
    console.log(data)
  }

  static findById(data) {
    console.log(data.dataValues)
  }

  static add(obj) {
    console.log(obj.dataValues)
    console.log(`adding new data succeeded`)
  }

  static update() {
    console.log(`update succeeded`)
  }

  static delete(id) {
    console.log(`delete id: ${id} succeeded`)
  }

  static help() {
    console.log('list of command');
    console.log('$ node index.js contacts:list');
    console.log('$ node index.js contacts:findById <id>');
    console.log('$ node index.js contacts:add <column:value-valuecont.>,<column2:value2-valuecont.>');
    console.log('$ node index.js contacts:update <column:value-valuecont.>,<column2:value2-valuecont.>');
    console.log('$ node index.js contacts:delete <id>');
    console.log('$ node index.js addresses:list');
    console.log('$ node index.js addresses:findById <id>');
    console.log('$ node index.js addresses:add <column:value-valuecont.>,<column2:value2-valuecont.>');
    console.log('$ node index.js addresses:update <column:value-valuecont.>,<column2:value2-valuecont.>');
    console.log('$ node index.js addresses:delete <id>');
  }
}

module.exports = View