const Address = require('./controllers/address.js')
const Contact = require('./controllers/contact.js')

if (process.argv[2] === 'contacts:list'){
    Contact.list()
}else if (process.argv[2] === 'contacts:add'){
    Contact.add(process.argv[3], process.argv[4], process.argv[5])
}else if(process.argv[2] === 'contacts:update'){
    Contact.update(process.argv[3], process.argv[4], process.argv[5])    
}else if (process.argv[2] === 'contacts:delete'){
    Contact.delete(process.argv[3] )
}else if(process.argv[2] === 'contacts:showAddressById'){
    Contact.finAddressById(process.argv[3] )
}else if (process.argv[2] === 'address:list'){
    Address.list()
}else if (process.argv[2] === 'address:add'){
    Address.add(process.argv[3], process.argv[4], process.argv[5], process.argv[6])
}else if(process.argv[2] === 'address:update'){
    Address.update(process.argv[3], process.argv[4], process.argv[5])    
}else if (process.argv[2] === 'address:delete'){
    Address.delete(process.argv[3] )
}else if (process.argv[2] === 'address:full'){
    Address.full_Address(process.argv[3] )
}