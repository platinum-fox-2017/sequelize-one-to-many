const Chalk = require('chalk')
const Table = require('cli-table')

class View{
    constructor(){

    }

    static viewContact(data){
        var table = new Table({
            head : ['ID','Name','Email','Phone'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                      Chalk.blue(data[i].name),
                      Chalk.cyan(data[i].email),
                      Chalk.yellow(data[i].phone)])
            }
      console.log("" + table)
    //   console.log(data)
    }

    static addContact(data){
        var table = new Table({
            head : ['ID','Name','Email','Phone'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                      Chalk.blue(data[i].name),
                      Chalk.cyan(data[i].email),
                      Chalk.yellow(data[i].phone)])
            }
        console.log(Chalk.red('ADD CONTACT SUCCESS!!!!'))
        console.log("" + table)
    }

    static viewAddress(data){
        var table = new Table({
            head : ['ID','Street','City','ZIP Code'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                      Chalk.blue(data[i].street),
                      Chalk.cyan(data[i].city),
                      Chalk.yellow(data[i].zip_code)])
            }
      console.log("" + table)
    }

    static addAddress(data){
        var table = new Table({
            head : ['ID','Street','City','ZIP Code'],
      
          })
          for(let i=0; i<data.length; i++){
              table.push([Chalk.green(data[i].id),
                    Chalk.blue(data[i].street),
                    Chalk.cyan(data[i].city),
                    Chalk.yellow(data[i].zip_code)])
            }
        console.log(Chalk.red('ADD ADDRESS SUCCESS!!!!'))
        console.log("" + table)
    }

}

module.exports = View