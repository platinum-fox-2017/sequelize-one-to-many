const AddressController = require('./controllers/AddressController')
const ContactController = require('./controllers/ContactController')

let myArgv =  process.argv;

let arrCommand = myArgv[2].split(':');

switch(arrCommand[0]) {
    case "contacts":
                    ContactController.menu(arrCommand[1],myArgv.slice(3));
                    break;
    case "addresses":
                    AddressController.menu(arrCommand[1],myArgv.slice(3));
                    break;
}