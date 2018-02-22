const chalk = require('chalk')

class View{
    static showList(dataContact){
        console.log(dataContact)
    }
    static commandAdded(){
        console.log(chalk.green('new contact created'))        
    }
    static commandUpdated(id){
        console.log(chalk.blue(`contact with id ${id} updated`))        
    }
    static commandDeleted(id){
        console.log(chalk.red(`contact with id ${id} deleted`))        
    }
    
}
module.exports = View