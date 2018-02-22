const {Contact,Address} = require('../models');
const View = require('../views/contact')


class ConAddress {
  constructor() {

  }
  static doSomething(command, request) {
    if (command === 'list') {
      Address.findAll().then(address => {
        address.forEach(data => {
          View.show_data(data.dataValues)
        })
        process.exit()
      })
    }

    else if (command === 'add') {
      for (var i = 0; i < request.length; i++) {
        var obj = {
          street: request[0],
          city: request[1],
          zip_code: request[2],
          id_contact: request[3]
        }
      }
      Address.create(obj).then(address => {
        View.show_add(address.dataValues)
      })
    }

    else if (command === 'update') {
      let id_user = +request[0]
      let slice = request.slice(1)
      let obj = {}
      for (var i = 0; i < slice.length; i++) {
        let split = slice[i].split(' ')
        obj[split[0]] = split[1]
      }
      Address.findById(id_user).then(address => {
        Address.update({
          street: obj.street || address.dataValues.street,
          city: obj.city || address.dataValues.city,
          zip_code: obj.zip_code || address.dataValues.zip_code,
          id_contact: obj.id_contact || address.dataValues.id_contact
        },{
          where: {
            id: id_user
          }
        }).then(address => {
          Address.findById(id_user).then(address => {
            View.show_update(address.dataValues)
          })
        })
      })
    }

    else if (command === 'delete') {
      let id_user = +request[0]
      Address.findById(id_user).then(address => {
        View.show_delete(address.dataValues.name)
        Address.destroy({
          where  : {
            id: id_user
          }
        })
      })
    }
  }
}

module.exports = ConAddress
