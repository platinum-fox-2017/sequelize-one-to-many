const {Contact, Address} = require('../models');
const View = require('../views/contact')


class ConContact {
  static doSomething(command, request) {
    if (command === 'list') {
      Contact.findAll({
        include: [{
          model: Address
        }]
      }).then(contacts => {
        contacts.forEach(data => {
          View.show_data(data.dataValues)

        })
        process.exit()
      })
    }

    else if (command === 'add') {
      for (var i = 0; i < request.length; i++) {
        var obj = {
          name: request[0],
          email: request[1],
          phone: request[2]
        }
      }
      Contact.create(obj).then(contacts => {
        View.show_add(contacts.dataValues)
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
      Contact.findById(id_user).then(contacts => {
        Contact.update({
          name: obj.name || contacts.dataValues.name,
          email: obj.email || contacts.dataValues.email,
          phone: obj.phone || contacts.dataValues.phone
        },{
          where: {
            id: id_user
          }
        }).then(contacts => {
          Contact.findById(id_user).then(contacts => {
            View.show_update(contacts.dataValues)
          })
        })
      })
    }

    else if (command === 'delete') {
      let id_user = +request[0]
      Contact.findById(id_user).then(contacts => {
        View.show_delete(contacts.dataValues.name)
        Contact.destroy({
          where  : {
            id: id_user
          }
        })
      })
    }

    else if (command === 'show_address') {
      let id_user = +request[0]
      Contact.findById(id_user,{
        include: [{
          model: Address
        }]
      }).then(data => {
        let newData = JSON.parse(JSON.stringify(data))
        console.log(newData);
        View.last(newData)
        process.exit()
      })
    }
  }
}

module.exports = ConContact
