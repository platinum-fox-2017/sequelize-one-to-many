"use strict"
const Model = require('../models');
const View = require('../views');

class ContactsController{
    static readCommand(option) {
        let command = option[0];
        option = option.slice(1);
        
        switch(command) {
            case 'create':
                ContactsController.createContact(option)
                break;
            case 'readAll':
                ContactsController.readContact();
                break;
            case 'readOne':
                ContactsController.readContact(option[0]);
                break;
            case 'update':
                ContactsController.updateContact(option);
                break;
            case 'delete':
                ContactsController.deleteContact(option[0]);
                break;
            default:
                break;
        }
    }

    static createContact(option) {
        Model.Contact.create({
            name: option[0],
            email: option[1],
            phone: option[2]
        });
    }

    static readContact(id) {
        if(id) {
            Model.Contact.findOne({where: {id:id}, raw:true})
                .then(data => {
                    View.simpleView(data);
                })
                .catch(() => {
                    View.failed();
                });
        }
        else {
            Model.Contact.findAll({raw:true})
            .then(data => {
                View.simpleView(data);
            })
            .catch(() => {
                View.failed();
            });
        }
    }

    static updateContact(option) {
        let newData = option[1].split(',').map(val => val.split(':'));
        let updateObj = {}
        for(let i in newData) {
            updateObj[newData[i][0]] = newData[i][1]
        }
        Model.Contact.update(updateObj, {where: {id:option[0]}});
    }

    static deleteContact(id) {
        Model.Contact.destroy({where: {id:id}});
    }
}

module.exports = ContactsController;