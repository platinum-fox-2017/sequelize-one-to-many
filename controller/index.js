const Addresses = require('./addresses.js');
const Contacts = require('./contacts');
const View = require('../view/index.js');

class Controller{
    constructor(){
        this.input = process.argv[2];
        this.target = this.input.split(':')[0];
        this.command = this.input.split(':')[1];
        this.options = process.argv.slice(3);
    }
    run(){
        switch(this.target){
            case 'contacts':
                Contacts.handler(this.command,this.options)
                    .then(data => {
                        View.handler_contact(data);
                    })
                    .catch(err => {
                        View.show_error(err);
                    })
                break;
            case 'addresses':
                Addresses.handler(this.command,this.options)
                    .then(data => {
                        View.handler_address(data);
                    })
                    .catch(err => {
                        View.show_error(err);
                    })
                break;
        }
    }
}

module.exports = Controller;
