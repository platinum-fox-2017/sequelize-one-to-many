'use strict'
const Addresses = require('../models/')
const ViewAddresses = require('../views/view-addresses')

class ControllerAddresses{
    constructor(){}
    static command(input, data){
        if (input === 'list') {
            this.list()
        }else if(input === 'add'){
            this.add(data)
        }else if (input === 'update') {
            let id = data[0]
            this.update(id, data)
        }else if (input === 'delete') {
            this.delete(data)
        }
    }

    static add(data){
        let obj = {
            street: data[0],
            city: data[1],
            zip_code: data[2],
            id_contacts: data[3]
        }
        Addresses.Addresses.create(obj).then(data => {
            console.log(data.dataValues)
            process.exit()
        })
    }

    static list(){
        Addresses.Addresses.findAll({raw:true}).then(addresses => {
            console.log(addresses)
            process.exit()
        })
    }

    static update(id, data){
        Addresses.Addresses.findById(id).then(oldData => {
            Addresses.Addresses.update({
                street: data[1] === '.' ? oldData.street : data[1],
                city: data[2] === '.' ? oldData.city : data[2],
                zip_code: data[3] === '.' ? oldData.zip_code : data[3],
                id_contacts: data[4] === '.' ? oldData.id_contacts : data[4]
            }, {where: {id:id}}).then(updatedData => {
                console.log('Data Updated!')
                process.exit()
            })
        })
    }

    static delete(id) {
        Addresses.Addresses.destroy({where: {id:id}}).then(data => {
            console.log('Data deleted');
            process.exit()
        })
    }
}

module.exports = ControllerAddresses