const {Contact, Address} = require('../models')
const View = require('../views/contact')
class Controller{
    static list(){
        Contact.findAll({
            include : [Address]            
        }).then(dataContact=>{
            let contactData = JSON.parse(JSON.stringify(dataContact))
                View.showList(contactData)
            process.exit();
        }).catch(err=>console.log(err))
    }
    static finAddressById(id){
        Contact.findById(Number(id),{
            include:[Address]
        }).then(data=>{
            let addressDAta = JSON.parse(JSON.stringify(data))
            View.showAddressByContact(addressDAta)
            process.exit()
        }).catch(err=>console.log(err))
    }
    static add(name, email, phone){
        let objContact = {
            name : name,
            email : email,
            phone : phone
        }
        Contact.create(objContact).then(()=>{
            View.commandAdded()
            process.exit();
        }).catch(err=>console.log(err))
    }

    static update(id, column, value){
        let objContact = {}
        if (column === 'name'){
            objContact = {
                name : value
            }
        }else if(column === 'email'){
            objContact = {
                email : value
            }
        }else if(column === 'phone'){
            objContact = {
                phone : value
            }
        }else{
            console.log(`no column ${column} name exist`)
        }
        Contact.update(objContact,{where : {id : Number(id)}}).then(()=>{
            View.commandUpdated(id)
            process.exit();
        }).catch(err=>console.log(err))
    }
    static delete(id){
        Contact.destroy({where:{ id : id}}).then(()=>{
            View.commandDeleted(id)
            process.exit();
        })
    }
}

module.exports = Controller