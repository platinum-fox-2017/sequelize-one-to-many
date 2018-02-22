const Models = require('../models');
const Views = require('../views')

class Controller {
    constructor() {
    }

    static manageCommand(command,options) {
        switch(true) {
            case (command == 'help') : this.help(); break;
            case (command == 'contacts:list') : this.list(command); break;
            case (command == 'addresses:list') : this.list(command); break;
            case (command == 'contacts:add') : this.addContact(options); break;
            case (command == 'addresses:add') : this.addAddresses(options); break;
            case (command == 'contacts:update') : this.updateContact(options); break;
            case (command == 'addresses:update') : this.updateAddresses(options); break;        
            case (command == 'contacts:delete') : this.deleteContact(options); break;
            case (command == 'addresses:delete') : this.deleteAddresses(options); break;
            default: this.help();
        }
    }

    static help() {
        Views.showHelp();
    }

    static list(command) {
        if (command == 'contacts:list') {
            Models.Contact.findAll({raw:true})
            .then(project => {
                Views.showList(project);
            })
        } else if (command == 'addresses:list') {
            Models.Address.findAll({raw:true})
            .then(project => {
                Views.showList(project);
            })
        }
    }

    static addContact(arrOptions) {

        Models.Contact.create({ name: arrOptions[0], email: arrOptions[1], phone: arrOptions[2] })
            .then(() => Models.Contact.findOrCreate({where: {name: arrOptions[0]}, defaults: {}}))
            .spread((Contact, created) => {
                Views.addContact(Contact,created);
        })

    }

    static addAddresses(arrOptions) {

        Models.Address.create({ street: arrOptions[0], city: arrOptions[1], zip_code: arrOptions[2], ContactsId: arrOptions[3] })
            .then(() => Models.Address.findOrCreate({where: {street: arrOptions[0]}, defaults: {}}))
            .spread((Address, created) => {
                Views.addAddresses(Address,created);
        })

    }

    static updateContact(arrOptions) {

        var updateObj = {};
        updateObj[arrOptions[1]] = arrOptions[2]; 
        Models.Contact.update(updateObj, {where: {id:arrOptions[0]}})
        .then(() => {
            Views.updateContact(); 
        })

    }

    static updateAddresses(arrOptions) {

        var updateObj = {};
        updateObj[arrOptions[1]] = arrOptions[2]; 
        Models.Address.update(updateObj, {where: {id:arrOptions[0]}})
        .then(() => {
            Views.updateAddresses(); 
        })

    }

    static deleteContact(arrOptions) {
        Models.Contact.destroy({where: {id:arrOptions[0]}})
        .then(() => {  
            Views.deleteContact();
        })
    }

    static deleteAddresses(arrOptions) {
        Models.Address.destroy({where: {id:arrOptions[0]}})
        .then(() => {  
            Views.deleteAddresses();
        })
    }



}


module.exports = Controller;