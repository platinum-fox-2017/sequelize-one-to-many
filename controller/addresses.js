const Model = require('../models');

class AddressesController {
    static handler(command,options){
        switch(command){
            case 'list':
                return AddressesController.list();
                break;
            case 'add':
                return AddressesController.add(options);
                break;
            case 'update':
                return AddressesController.update(options);
                break;
            case 'delete':
                return AddressesController.delete(options);
                break;
            case 'fullAddress':
                return AddressesController.fullAddress();
                break;
            case 'north-area':
                return AddressesController.findNorthArea();
                break;
            case 'south-area':
                return AddressesController.findSouthArea();
                break;
        }
    }

    static findNorthArea(flag){
        return Model.Address.findNorthArea();
    }

    static findSouthArea(flag){
        return Model.Address.findSouthArea();
    }

    static fullAddress(){
        return new Promise((resolve,reject) => {
            Model.Address.findAll()
                .then(data_address => {
                    data_address.forEach(address => address.full_address());
                });
        });
    }

    static list(){
        return new Promise((resolve, reject) => {
            Model.Address.findAll({raw:true})
                .then(data_address => {
                    resolve(data_address);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static add(options){
        let tempObj = new Object();
        tempObj.street = options[0];
        tempObj.city = options[1];
        tempObj.zip_code = options[2];
        return new Promise((resolve, reject) => {
            Model.Address.create(tempObj)
                .then(task => {
                    resolve(`Succeed to add ${JSON.stringify(tempObj)} to database`);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static update(options){
        let idUpdate = options[0];
        let column = options[1];
        let value = options[2];
        let tempObj = new Object();
        tempObj[column] = value;
        return new Promise((resolve,reject) => {
            Model.Address.update(tempObj,{where: {id: idUpdate}})
                .then(() => {
                    resolve(`Succeed to add ${JSON.stringify(tempObj)} to database`);
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    static delete(idDelete){
        return new Promise((resolve, reject) => {
            Model.Address.destroy({where : {id : idDelete}})
                .then(() => {
                    resolve(`Succeed to delete data id ${idDelete}`);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
}

module.exports = AddressesController;
