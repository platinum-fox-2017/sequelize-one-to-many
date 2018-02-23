const Model = require('../models');

class ContactsController {
    static handler(command,options){
        switch(command){
            case 'list':
                return ContactsController.list();
                break;
            case 'add':
                return ContactsController.add(options);
                break;
            case 'update':
                return ContactsController.update(options);
                break;
            case 'delete':
                return ContactsController.delete(options);
                break;
            case 'listWithAddress':
                return ContactsController.listWithAddress();
                break;
            case 'idWithAddress':
                return ContactsController.idWithAddress(options);
        }
    }

    static idWithAddress(option){
        return new Promise((resolve, reject) => {
            Model.Contact.findAll({raw:true,include:[Model.Address],attributes:["id"],where: {id : option}})
                .then(data => {
                    resolve(data);
                })
                .catch( err => {
                    reject(err);
                })
        })
    }

    static listWithAddress(){
        return new Promise((resolve, reject) => {
            Model.Contact.findAll({raw: true, include:[Model.Address]})
                .then(data_contact => {
                    resolve(data_contact);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static list(){
        return new Promise((resolve, reject) => {
            Model.Contact.findAll({raw:true})
                .then(data_contact => {
                    resolve(data_contact);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static add(options){
        let tempObj = new Object();
        tempObj.name = options[0];
        tempObj.email = options[1];
        tempObj.phone = options[2];
        return new Promise((resolve, reject) => {
            Model.Contact.create(tempObj)
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
            Model.Contact.update(tempObj,{where: {id: idUpdate}})
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
            Model.Contact.destroy({where : {id : idDelete}})
                .then(() => {
                    resolve(`Succeed to delete data id ${idDelete}`);
                })
                .catch(err => {
                    reject(err);
                });
        })
    }
}

module.exports = ContactsController;
