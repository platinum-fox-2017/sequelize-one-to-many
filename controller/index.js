const Models = require('../models')
const View = require('../view')

class Controller {
  static command(table, addition, options) {
    switch(addition) {
      case 'list' :
        if(table === 'Contact') {
          Models.Contact.findAll({
            include: [{
              model: Models.Address
            }]
          }).then(data => {
            View.readAll(data)
          })
        } else {
          Models[table].findAll({raw: true}).then(data => {
            View.readAll(data)
          })
        }

      // Models.Contact.getAddresses({where: {id: 3}}).then(data => {
      //   console.log(data)
      // })
      break;
      case 'findById' :
        if(table === 'Contact') {
          Models.Contact.findById(options[0], {
            include: [{
              model: Models.Address
            }]
          }).then(data => {
            View.findById(data)
          })
        } else {
          Models[table].findById(options[0], {})
            .then(data => {
              View.findById(data)
          })
        }
      break;
      case 'add' :
        let obj = {}
        let inserts = options[0].split(',')
        for(let i = 0; i < inserts.length; i++) {
          let insert = inserts[i].split(':')
          obj[`${insert[0]}`] = insert[1].replace(/-/g, ' ')
        }
        Models[table].create(obj).then(obj => {
          View.add(obj)
        })
      break;
      case 'update' :
        let id = options[0]
        let updates = options[1].split(',')
        for(let i = 0; i < updates.length; i++) {
          let update = updates[i].split(',')
          let keyAndValue = update[0].split(':')
          Models[table].update({[`${keyAndValue[0]}`]: `${keyAndValue[1].replace(/-/g, ' ')}`},
            {where: {id: id}})
          .then(() => {
            View.update()
          })
          .catch(err => console.log(err))
        }
      break;
      case 'delete' :
        Models[table].destroy({where: {id: options[0]}})
          .then(()=>{
            View.delete(options[0])
        })
      break;
      default:
        View.help()
    }
  }
}

module.exports = Controller