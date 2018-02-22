const models = require('../models/index');
const View = require('../views/index');

class AddressController {

  static main(command, options){

    if(command.search('list') >= 0){
      models.Address.all({raw: true}).then((addresses) => {
        View.printResult(addresses);
      });
    } else if(command.search('add') >= 0){
      let input = AddressController.convertToObject(options[0]);
      models.Address.build(input).save().then(() => {
        View.successToAdd('address');
      }).catch((err) => {
        console.log(err);
        View.failToAdd('address');
      })
    } else if(command.search('update') >= 0){
      let input = AddressController.convertToObject(options[1]);
      let id = options[0];
      models.Address.findById(id).then((address) => {
        address.update(input).then(() => {
          View.successToUpdate('address');
        }).catch(() => {
          View.failToUpdate('address');
        })
      })
    } else if(command.search('delete') >= 0){
      let id = options[0];
      models.Address.findById(id).then((address) => {
         return address.destroy();
      }).then(() => {
          View.successToDelete('address');
      }).catch(() => {
        View.failToDelete('address');
      })
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
module.exports = AddressController;
