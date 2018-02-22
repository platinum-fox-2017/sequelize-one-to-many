'use strict'
const Contacts = require('../models/')
const {Addresses} = require('../models/')
const ViewContacts = require('../views/view-contacts')

class ControllerContacts{
    constructor(){}
    static command(input, data){
        if (input === 'list') {
            this.list()
        }else if(input === 'add') {
            this.add(data)
        }else if(input === 'update') {
            let id = data[0]
            this.update(id, data)
        }else if(input === 'delete') {
            this.delete(data)
        }
    }

    static add(data){
        let obj = {
            name: data[0],
            email: data[1],
            phone: data[2]
        }
        Contacts.Contacts.create(obj).then(data => {
            console.log(data.dataValues)
            process.exit()
        })
    }

    static list(){
        Contacts.Contacts.findAll({raw:true, include: Addresses }).then(contacts => {
            console.log(contacts)
            process.exit()
        })
    }

    static update(id, data){
        Contacts.Contacts.findById(id).then(oldData => {
            Contacts.Contacts.update({
                name: data[1] === '.' ? oldData.name : data[1],
                email: data[2] === '.' ? oldData.email : data[2],
                phone: data[3] === '.' ? oldData.phone : data[3]
            }, {where: {id:id}}).then(updatedData => {
                console.log('Data updated!')
                process.exit()
            })
        })
    }

    static delete(id) {
        Contacts.Contacts.destroy({ where: { id: id } }).then(data => {
            console.log('Data deleted');
            process.exit()
        })
    }
}

module.exports = ControllerContacts