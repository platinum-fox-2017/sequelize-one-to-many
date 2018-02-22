const model = require('../models')
const view = require('../views/views-contacts.js')

class ControllerContacts {
    constructor(){

    }
    static manageAction(act, value){
        if(act === 'list'){
            model.Contact.findAll()
            .then(contact => {
                // console.log(contact)
                view.list(contact)
            })
        } else if(act === 'add'){
            model.Contact.create({
                name: value[0],
                email: value[1],
                phone: value[2]
            })
            .then(addContact =>{
                view.notifAdd(addContact)
            })
        } else if(act === 'update'){
            model.Contact.update({
                name: value[1],
                email: value[2],
                phone: value[3]
              }, {where: {id: value[0]}
              })
              .then(updateContact => {
                view.notifUpdate(updateContact)
              })
        } else if(act === 'delete'){
            model.Contact.destroy({
            where: { id: value[0] }
            })
            .then(deleteContact =>{
                view.notifDelete(deleteContact)
            })

        }
    }
}

module.exports = ControllerContacts