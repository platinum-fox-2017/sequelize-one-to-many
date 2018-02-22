const { Contact, Address } = require('../models')
const ContactView = require('../views/contact')

class ContactController {
    static showAll() {
        Contact.findAll().then((datas) => {
            ContactView.showAll(datas)
        }).catch((err) => {
            console.log(err);
        })
    }

    static showAllwithAddress() {
        Contact.findAll(
            {
                include: [
                    { model: Address }
                ]
            }).then((datas) => {
                ContactView.showAllwithAddress(datas)
            })
    }

    static findAddressByContactId(id) {
        // console.log(id)
        Contact.findById(id, {
            include: [
                { model: Address }
            ]
        }).then((data) => {
            ContactView.findAddressByContactId(data)
            // console.log(data.dataValues.Addresses[1].dataValues)
        })
    }

    static addContact(name, email, phone) {
        Contact.create({
            name: name,
            email: email,
            phone: phone
        }).then(() => {
            console.log('ADDED')
            process.exit()
        }).catch((err) => {
            console.log(err)
        })
    }

    static updateContact(id, column) {
        Contact.findById(id).then((data) => {
            Contact.update(
                {
                    name: (column[0] === '') ? data.dataValues.name : column[0],
                    email: (column[1] === '') ? data.dataValues.email : column[1],
                    phone: (column[2] === '') ? data.dataValues.phone : column[2]
                },
                {
                    where: {
                        id: id
                    }
                }).then(() => {
                    console.log('UPDATED')
                    process.exit()
                })
        }).catch((err) => {
            console.log(err)
        })
    }

    static deleteContact(id) {
        Contact.destroy(
            {
                where: {
                    id: id
                }
            }).then(() => {
                console.log('destroy')
                process.exit()
            })
    }
}

module.exports = ContactController