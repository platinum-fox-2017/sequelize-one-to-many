const models = require('./models/')
const views = require('./views.js')


class Controller{
    constructor(){

    }

    static command(syntax, option){
        if(syntax == 'contacts:list'){
            models.Contact.findAll({raw:true}).then(contactData => {
                views.viewContact(contactData)
                process.exit()
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
                process.exit()
              })
        }
        else if(syntax == 'contacts:update'){
            var obj = {}
            if(option[1] == 'name'){
                obj = {name:option[2]}
            }
            else if(option[1] == 'email'){
                obj = {email:option[2]}
            }
            else if(option[1] == 'phone'){
                obj = {phone:option[2]}
            }
            models.Contact.update(obj,
                {where:{
                    id:option[0]
                }}).then(() => {
                    process.exit()
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
                process.exit()
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
                process.exit()
              })
        }
        else if(syntax == 'addresses:update'){
            var obj = {}
            if(option[1] == 'street'){
                obj = {street:option[2]}
            }
            else if(option[1] == 'city'){
                obj = {city:option[2]}
            }
            else if(option[1] == 'zip_code'){
                obj = {zip_code:option[2]}
            }
            models.Address.update(obj, 
                {where:{
                    id:option[0]
                }}).then(() => {
                    process.exit()
            })
        }
        else if(syntax == 'addresses:delete'){
            models.Address.destroy({
                where:{
                    id:option[0]
                } 
            })
        }
        else if(syntax == 'ContactAddress'){
            models.Contact.findAll({
                include:
                    [{model: models.Address}]
            }).then(data =>{
                let dataContact = []
                for(let i=0; i<data.length; i++){
                    dataContact.push(data[i].dataValues)
                }

                // console.log(dataContact)
                views.ContactAddress(dataContact)
                process.exit()
            })
        }
    }

}

module.exports = Controller