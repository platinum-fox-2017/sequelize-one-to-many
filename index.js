const Contact = require('./controllers/contact')
const Address = require('./controllers/address')

let command = process.argv.splice(3)
let route = process.argv[2]

if(route === 'contact'){
    Contact.commandManage(command)
}else{
    Address.commandManage(command)
}