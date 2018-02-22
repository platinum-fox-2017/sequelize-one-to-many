const Table = require('cli-table')
const chalk = require('chalk')

class View {
  static readAll(data) {
    let table = new Table({
      head: Object.keys(data[0]),
    });
    for(let i = 0; i < data.length; i++) {
      table.push(Object.values(data[i]))
    }
    console.log(chalk.blue.bgWhite(table.toString()))
  }

  static findById(data) {
    let table = new Table({
      head: Object.keys(data.dataValues),
    });
    table.push(
      Object.values(data.dataValues)
    )
    console.log(chalk.blue.bgWhite(table.toString()))
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