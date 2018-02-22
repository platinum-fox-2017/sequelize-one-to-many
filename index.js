'use strict'

const ControllerContacts = require('./controllers/controller-contacts')
const ControllerAddresses = require('./controllers/controller-addresses')

let argv = process.argv.slice(2)

if (argv[0].split(':')[0] === 'contacts') {
    ControllerContacts.command(argv[0].split(':')[1], argv.slice(1))
}else if (argv[0].split(':')[0] === 'addresses') {
    ControllerAddresses.command(argv[0].split(':')[1], argv.slice(1))
}