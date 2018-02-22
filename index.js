const Address = require ('./controllers/address')
const Contact = require ('./controllers/contact')

const dataFromArgv = process.argv[2].split(':')
const payload = process.argv.splice(3)
const table = dataFromArgv[0]
const command = dataFromArgv[1]

if(table === 'contacts') {
  Contact.getCommand(command,payload)
} else if(table === 'addresses') {
  Address.getCommand(command,payload)
}
