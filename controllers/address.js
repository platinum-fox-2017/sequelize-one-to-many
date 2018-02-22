const models = require('../models')
const view = require('../views/address.js')

class AddressController {
    static run (command, options){
        switch (command){
            case 'list':
            models.Address.findAll({raw: true})
            .then(res => 
                view.display(res)
            )
            .catch(err => 
                view.log(err)
            ) 
            break
            case 'add':
                let addStreet = options[0]
                let addCity = options[1]
                let addZipCode = options[2]
                let addContactId = options[3]
                models.Address.create({
                    Street: addStreet,
                    City: addCity,
                    ZipCode: addZipCode,
                    createdAt: new Date(),
                    updatedAt: new Date(), 
                    ContacId: addContactId
                }).then(data => {
                    view.display(data.dataValues)
                })
                break
            case 'update':
                let identity = options[0]
                let change = options.splice(1)
                let obj = {}
                for (let i = 0; i < change.length; i++){
                    let attribute = change[i].split(':')[0]
                    let value = change[i].split(':')[1]
                    obj[attribute] = value
                }
                models.Address.update(obj, {where:{id: identity}})
                    .then(() => models.Address.findAll({raw:true}))
                    .then(data => {view.display(data)})
                    .catch(err => console.log(err))
                break
            case 'delete':
                models.Address.destroy({where: {id: options[0]}})
                    .then(()=> {models.Address.findAll({raw: true})
                    .then(data => {view.display(data)})
                    })
                break
            case 'show':
                
                break
            // case 'contactAddress':
        }
    }
}

module.exports = AddressController