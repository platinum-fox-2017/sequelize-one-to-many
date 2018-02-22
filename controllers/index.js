const ContactController = require('./contact');
const AddressController = require('./address');


class MainController {
  static routeCommand(command, options){
    if (command.search('contacts') >= 0) {
      ContactController.main(command,options);
    } else if (command.search('addresses') >= 0) {
      AddressController.main(command,options);
    }
  }
}
module.exports = MainController;
