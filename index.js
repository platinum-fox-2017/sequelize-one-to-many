const Address = require('./controllers/address.js')
const Contact = require('./controllers/contact.js')
const Help = require('./views/help.js')



class Index {
  constructor() {

  }

  static address(data){
    let command = data[0]
    let payload = data.slice(1)
    let target = data[1]
    let edit = data.slice(2)
    if(command === 'showAll'){
      Address.showAll()
    } else if(command === 'showOne'){
      Address.showOne(payload)
    } else if(command === 'add'){
      Address.add(payload)
    } else if(command === 'delete'){
      Address.delete(payload)
    } else if(command === 'edit'){
      Address.edit(target,edit)
    } else {
      console.log('error');
    }

  }

  static contact(data){
    let command = data[0]
    let payload = data.slice(1)
    let target = data[1]
    let edit = data.slice(2)
    if(command === 'showAll'){
      Contact.showAll()
    } else if(command === 'showOne'){
      Contact.showOne(payload)
    } else if(command === 'add'){
      Contact.add(payload)
    } else if(command === 'delete'){
      Contact.delete(payload)
    } else if(command === 'edit'){
      Contact.edit(target,edit)
    } else if(command === 'showAddress'){
      Contact.showContactAddress()
    } else {
      console.log('error');
    }

  }
}


let command = process.argv[2]
let data = process.argv.slice(3)

if(command === 'address'){
  Index.address(data)
} else if(command === 'contact'){
  Index.contact(data)
} else {
  Help.showHelp()
}
