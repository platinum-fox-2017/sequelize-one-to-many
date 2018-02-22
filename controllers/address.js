const {Address, Contact} = require('../models')
const View = require('../views/address')
class Controller{
    static list(){
        Address.findAll().then(dataAddress=>{
            dataAddress.map(data=>{
                View.showList(data.dataValues)
            })
            process.exit();
        }).catch(err=>console.log(err))
    }
    static add(street, city, zip_code, id_contact){
        let objAddress = {
            street : street,
            city : city,
            zip_code : zip_code,
            id_contact : id_contact
        }
        Address.create(objAddress).then(()=>{
            View.commandAdded()
            process.exit();
        }).catch(err=>console.log(err))
    }

    static update(id, column, value){
        let objAddress = {}
        if (column === 'street'){
            objAddress = {
                street : value
            }
        }else if(column === 'city'){
            objAddress = {
                city : value
            }
        }else if(column === 'zip_code'){
            objAddress = {
                zip_code : value
            }
        }else if(column === 'id_contact'){
            objAddress = {
                id_contact : value
            }
        }else{
            console.log(`no column ${column} name exist`)
        }
        Address.update(objAddress,{where : {id : Number(id)}}).then(()=>{
            View.commandUpdated(id)
            process.exit();
        }).catch(err=>console.log(err))
    }
    static delete(id){
        Address.destroy({where:{ id : id}}).then(()=>{
            View.commandDeleted(id)
            process.exit();
        })
    }
    static full_Address(id){
        Address.findById(id).then(data=>{
            let contactData = JSON.parse(JSON.stringify(data))
            console.log(contactData)
            //contactData.fullAddress()
            console.log(contactData)
        }).catch(err=>console.log(err))
    }
}

module.exports = Controller