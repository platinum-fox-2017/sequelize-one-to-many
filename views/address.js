const chalk = require('chalk')

class View{
    static showList(dataAddress){
        console.log(dataAddress)
    }
    static commandAdded(){
        console.log(chalk.green('new address created'))        
    }
    static commandUpdated(id){
        console.log(chalk.blue(`address with id ${id} updated`))        
    }
    static commandDeleted(id){
        console.log(chalk.red(`address with id ${id} deleted`))        
    }
    
}
module.exports = View