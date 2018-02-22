let controlContact = require('./controller-contact.js')
let controlAddress = require('./controller-address.js')

class Controller {
    constructor(){

    }
    static manageOption(option, act, value){
        if(option === 'contacts'){
            controlContact.manageAction(act, value)
        } else if(option === 'addresses'){
            controlAddress.manageAction(act, value)
        }
    }
}

module.exports = Controller