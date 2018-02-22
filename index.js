const contacts = require('./controllers/contacts');
const addresses = require('./controllers/addresses');

let commandSplit = process.argv[2].split(':')
let category = commandSplit[0]
let task = commandSplit[1]
let data = process.argv.splice(3)

if(category === 'contacts'){
  if(task === 'list'){
    contacts.list()
  }
  else if(task === 'add'){
    contacts.add(data)
  }
  else if(task === 'update'){
    contacts.update(data)
  }
  else if(task === 'delete'){
    contacts.delete(data)
  }
  else if(task === 'findAddresses'){
    contacts.findAddresses(data)
  }
}
else if(category === 'addresses'){
  if(task === 'list'){
    addresses.list()
  }
  else if(task === 'add'){
    addresses.add(data)
  }
  else if(task === 'update'){
    addresses.update(data)
  }
  else if(task === 'delete'){
    addresses.delete(data)
  }
}
