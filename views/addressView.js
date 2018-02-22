const Table = require('cli-table')
const Chalk = require('chalk')

class AddressView {
  constructor() {

  }

  static showAddress(data){
    let t = new Table({
      head:['ID.','Street','City','Zip Code','ID Contact']
    })
      for(let i = 0;i<data.length;i++){
        t.push(
          [Chalk.blue.bold(`${data[i].dataValues.id}`),Chalk.blue.bold(`${data[i].dataValues.street}`),Chalk.grey.bold(`${data[i].dataValues.city}`),Chalk.grey.bold(`${data[i].dataValues.zip_code}`),Chalk.grey.bold(`${data[i].dataValues.id_contact}`)]
        )
      }
      console.log(t.toString());
    }
}


module.exports = AddressView
