//runner
const Controller_contact = require('./controllers/contact')
const Controller_address = require('./controllers/address')

// node app.js addresses:list
let commandInput = process.argv[2].split(':')
let input = process.argv.splice(3)
// console.log(commandInput[0])

if(commandInput[0]=== 'contacts'){
  Controller_contact.command(commandInput[1],input)
}
else if(commandInput[0] === 'addresses'){
  Controller_address.command(commandInput[1],input)
}