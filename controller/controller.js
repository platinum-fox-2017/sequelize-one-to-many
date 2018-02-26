const Contacts = require('./contacts.js');
const Addresses = require('./addresses.js');

class Controller {
  static command(input1,input2,input3){
    if(input1==='contacts'){
      if(input2==='list'){
        Contacts.list();
      } else if(input2==='add'){
        Contacts.add(input3);
      } else if(input2==='update'){
        Contacts.update(input3);
      } else if(input2==='delete'){
        Contacts.delete(input3);
      } else {
        console.log('Wrong command');
      }
    } else if(input1==='addresses'){
      if(input2==='list'){
        Addresses.list();
      } else if(input2==='add'){
        Addresses.add(input3);
      } else if(input2==='update'){
        Addresses.update(input3);
      } else if(input2==='delete'){
        Addresses.delete(input3);
      } else {
        console.log('Wrong command');
      }
    } else {
      console.log('Wrong command');
    }
  }
}

module.exports = Controller;
