const models = require('../models/index');
const View = require('../views/index');

class ContactController {

  static main(command, options){
    if(command.search('list') >= 0){
      models.Contact.all({raw: true}).then((contacts) => {
        View.printResult(contacts);
      });
    } else if(command.search('find') >= 0){
      let id = options[0];
      models.Contact.findById(id).then((contact) => {
        View.printResult([contact.dataValues]);
        contact.getAddresses({raw: true}).then((address) => {
          View.printResult(address);
        });
      });
    } else if(command.search('add') >= 0){
      let input = ContactController.convertToObject(options[0]);
      models.Contact.build(input).save().then(() => {
        View.successToAdd('contact');
      }).catch((err) => {
        console.log(err);
        View.failToAdd('contact');
      })
    } else if(command.search('update') >= 0){
      let input = ContactController.convertToObject(options[1]);
      let id = options[0];
      models.Contact.findById(id).then((contact) => {
        contact.update(input).then(() => {
          View.successToUpdate('contact');
        }).catch(() => {
          View.failToUpdate('contact');
        })
      })
    } else if(command.search('delete') >= 0){
      let id = options[0];
      models.Contact.findById(id).then((contact) => {
         return contact.destroy();
      }).then(() => {
          View.successToDelete('contact');
      }).catch(() => {
        View.failToDelete('contact');
      })
    } else if(command.search('withAddress') >= 0){
      models.Contact.all({include: [{ model: models.Address}]}).then((contacts) => {

        let arrOfContact = [];
        for (var i = 0; i < contacts.length; i++) {
          arrOfContact.push(contacts[i].dataValues);
        }
        View.printResult(arrOfContact);
      });
    }
  }

  static convertToObject(input){
    input = input.split(',');
    let object = {};
    for (var i = 0; i < input.length; i++) {
      let column = input[i].split(':');
      object[column[0]] = column[1];
    }
    return object;
  }
}
module.exports = ContactController;
