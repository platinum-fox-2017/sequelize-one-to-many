const models = require('../models/index')
const ContactView = require('../views/ContactView')

class ContactController {
    static menu(command, option) {
        switch (command) {
            case "list":
                models.Contacts.findAll({ raw: true })
                .then(contact => {
                    ContactView.listView(contact);
                })
                .catch(err => {
                    ContactView.errorView(err);
                })
                break;
            case "add":
                models.Contacts.create({
                    name: option[0],
                    email: option[1],
                    phone: option[2]
                })
                .then(() => {
                    ContactView.addView(option);
                })
                .catch(err => {
                    ContactView.errorView(err);
                })
                break;
            case "update":
                let updateField = option[0].split(',');
                let updateObj = {}
                for (let i = 0; i < updateField.length; i++) {
                    let splittedKey = updateField[i].split(':')
                    updateObj[splittedKey[0]] = splittedKey[1];
                }

                models.Contacts.update(
                    updateObj,
                    { where: { id: option[1] } }
                )
                .then(() => {
                    ContactView.updateView(option[1]);
                })
                .catch(err => {
                    ContactView.errorView(err);
                })
                break;
            case "delete":
                models.Contacts.destroy({
                    where: {
                        id: option[0]
                    }
                })
                .then(() => {
                    ContactView.deleteView(option[0]);
                })
                .catch(err => {
                    ContactView.errorView(err);
                })
                break;
            case "listWithAddress":
                models.Contacts.findAll({
                    include: [{ model: models.Address }]
                })
                .then(contacts => {
                    ContactView.listWithAddressView(contacts);
                })
                .catch(err => {
                    ContactView.errorView(err);
                })
                break;
            case "idWithListAddress":
                models.Contacts.findOne({
                    where: {
                        id: option[0]
                    }
                })
                .then(contact => {
                    contact.getAddresses()
                        .then(assocAddress => {
                            ContactView.idListWithAddressView(contact.name, assocAddress)                            
                        })

                })
                break;
        }
    }
}

module.exports = ContactController;