"use strict"
const ContactsController = require('./controller/contact.js');
const AddressesController = require('./controller/address.js');
const Model = require('./models');

let argv = process.argv;

// let command = argv[2].split(':')[0];
// let option = argv[2].split(':').slice(1).concat(argv.slice(3));

let attributes = ['Contacs.name', 'Addresses.city'];
Model.Address.findAll({
    include: [{model: Model.Contact}],
    raw:true
    // group: 'city'
    // attributes: ['city','Contact.id']
})
.then(function(data) {
    console.log(data)
})
.catch(err => {
    console.log(err);
})

// switch(command) {
//     case 'contact':
//         ContactsController.readCommand(option);
//         break;
//     case 'address':
//         AddressesController.readCommand(option);
//         break;
//     default:
//         break;
// }