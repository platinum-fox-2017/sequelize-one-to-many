const Contact = require('./controller/contact');
const Address = require('./controller/address');

let command = process.argv[2].split(':')
let request = process.argv.splice(3)

if (command[0] === 'contacts') {
  Contact.doSomething(command[1],request)
}
else if (command[0] === 'addresses') {
  Address.doSomething(command[1],request)
}
