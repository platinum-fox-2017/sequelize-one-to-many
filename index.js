const ContactController = require('./controllers/contact');
const AddressesController = require('./controllers/address');

const command = process.argv
const category = process.argv[2].split(':')[0];
const task = process.argv[2].split(':')[1];
const data = command.splice(3, command.length);

if (category === 'contacts') {
    ContactController.parsingData(task, data)
} else if (category === 'addresses') {
    AddressesController.parsingData(task, data)
}

