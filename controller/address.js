"use strict"
const View = require('../views');
const Model = require('../models');

class AddressesController{
    static readCommand(option) {
        let command = option[0];
        option = option.slice(1);
        
        switch(command) {
            case 'create':
                AddressesController.createAddress(option)
                break;
            case 'readAll':
                AddressesController.readAddress();
                break;
            case 'readOne':
                AddressesController.readAddress(option[0]);
                break;
            case 'update':
                AddressesController.updateAddress(option);
                break;
            case 'delete':
                AddressesController.deleteAddress(option[0]);
                break;
            case 'list':
                AddressesController.listAddresses(option[0]);
                break;
            default:
                break;
        }
    }

    static createAddress(option) {
        Model.Address.create({
            street: option[0],
            city: option[1],
            zip_code: option[2]
        });
    }

    static readAddress(id) {
        if(id) {
            Model.Address.findOne({where: {id:id}, raw:true})
                .then(data => {
                    View.simpleView(data);
                    return data;
                })
                .catch(() => {
                    View.failed();
                });
        }
        else {
            Model.Address.findAll({raw:true})
            .then(data => {
                View.simpleView(data);
            })
            .catch(() => {
                View.failed();
            });
        }
    }

    static updateAddress(option) {
        let newData = option[1].split(',').map(val => val.split(':'));
        let updateObj = {}
        for(let i in newData) {
            updateObj[newData[i][0]] = newData[i][1]
        }
        Model.Address.update(updateObj, {where: {id:option[0]}});
    }

    static deleteAddress(id) {
        Model.Address.destroy({where: {id:id}});
    }

    // static listAddresses()
}

module.exports = AddressesController;