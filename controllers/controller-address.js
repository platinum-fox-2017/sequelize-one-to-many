const model = require('../models')
const view = require('../views/view-addresses.js')

class ControllerAddresses {
    constructor(){

    }
    static manageAction(act, value){
        if(act === 'list'){
            model.Address.findAll()
            .then(address => {
                view.list(address)
            })
        } else if(act === 'add'){
            model.Address.create({
                street: value[0],
                city: value[1],
                zip_code: value[2],
                contactId: value[3]
            })
            .then(addAddress =>{
                view.notifAdd(addAddress)
            })
        } else if(act === 'update'){
            model.Address.update({
                street: value[1],
                city: value[2],
                zip_code: value[3],
                contactId: value[4]
              }, {where: {id: value[0]}
              })
              .then(updateAddress => {
                view.notifUpdate(updateAddress)
              })
        } else if(act === 'delete'){
            model.Address.destroy({
            where: { id: value[0] }
            })
            .then(deleteAddress =>{
                view.notifDelete(deleteAddress)
            })

        }
    }
    
}

module.exports = ControllerAddresses