const models = require('./models/')
const views = require('./views.js')


class Controller{
    constructor(){

    }

    static command(syntax, option){
        if(syntax == 'contacts:list'){
            models.Contact.findAll({raw:true}).then(contactData => {
                views.viewContact(contactData)
            })
        }
        else if(syntax == 'contacts:add'){
            models.Contact.create({ 
                name:option[0], 
                email:option[1],
                phone:option[2]
            }).then(Contacts => {
                var arrData = []
                arrData.push(Contacts.get({
                  plain: true
                }))
                views.addContact(arrData)
              })
        }
        else if(syntax == 'contacts:update'){
            models.Contact.update({ 
                name:option[1], 
                email:option[2],
                phone:option[3]
            }, {where:{
                id:option[0]
            }}).then(() => {

            })
        }
        else if(syntax == 'contacts:delete'){
            models.Contact.destroy({
                where:{
                    id:option[0]
                } 
            })
        }
        else if(syntax == 'addresses:list'){
            models.Address.findAll({raw:true}).then(addressData => {
                views.viewAddress(addressData)
            })
        }
        else if(syntax == 'addresses:add'){
            models.Address.create({ 
                street:option[0], 
                city:option[1],
                zip_code:option[2]
            }).then(Addresses => {
                var arrData = []
                arrData.push(Addresses.get({
                  plain: true
                }))
                views.addAddress(arrData)
              })
        }
        else if(syntax == 'addresses:update'){
            models.Address.update({ 
                street:option[1], 
                city:option[2],
                zip_code:option[3]
            }, {where:{
                id:option[0]
            }}).then(() => {

            })
        }
        else if(syntax == 'addresses:delete'){
            models.Address.destroy({
                where:{
                    id:option[0]
                } 
            })
        }
    }

}

module.exports = Controller