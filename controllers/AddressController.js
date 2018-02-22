const models = require('../models/index')
const AddressView = require('../views/AddressView')

class AddressController {
    static menu(command, option) {
        switch(command) {
            case "list":
                        models.Address.findAll({raw:true})
                        .then(address => {
                            AddressView.listView(address);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;
            case "add":         
                        models.Address.create({
                            street: option[0],
                            city: option[1],
                            zip_code: option[2]
                        })
                        .then(() => {
                            AddressView.addView(option);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;
            case "update":
                        let updateField = option[0].split(',');
                        let updateObj = {}
                        for (let i = 0; i < updateField.length; i++) {
                            let splittedKey = updateField[i].split(':')
                            updateObj[splittedKey[0]] = splittedKey[1];
                        }
                        
                        models.Address.update(
                            updateObj,
                            { where: { id: option[1] } }
                        )
                        .then(() => {
                            AddressView.updateView(option[1]);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;
            case "delete":
                        models.Address.destroy({
                            where : {
                                id : option[0]
                            }
                        })
                        .then(() => {
                            AddressView.deleteView(option[0]);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;
            case "fulladdress":
                        models.Address.findAll()
                        .then(address => {
                            address.forEach(eachAddress => {
                                AddressView.fullAddressView(eachAddress.fullAddress());
                            })
                        })
                        break;
            case "northarea":
                        models.Address.findNorthArea()
                        .then(northAddresses => {
                            AddressView.northAreaView(northAddresses);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;
            case "southarea":
                        models.Address.findSouthArea()
                        .then(southAddresses => {
                            AddressView.southAreaView(southAddresses);
                        })
                        .catch(err => {
                            AddressView.errorView(err);
                        })
                        break;            
        }
    }
}

module.exports = AddressController;