const ContactControllers = require('./controllers/contact')
const AddressControllers = require('./controllers/address')

if (process.argv[2] === 'contacts:list') {
    ContactControllers.showAll()
} else if (process.argv[2] === 'contacts:listWithAddresses') {
    ContactControllers.showAllwithAddress()
} else if (process.argv[2] === 'contacts:findAddressByContactId') {
    ContactControllers.findAddressByContactId(process.argv[3])
}
else if (process.argv[2] === 'contact:add') {
    ContactControllers.addContact(process.argv[3], process.argv[4], process.argv[5])
} else if (process.argv[2] === 'contact:update') {
    ContactControllers.updateContact(process.argv[3], process.argv[4].split(','))
} else if (process.argv[2] === 'contact:delete') {
    ContactControllers.deleteContact(process.argv[3])
} else if (process.argv[2] === 'addresses:list') {
    AddressControllers.showAll()
} else if (process.argv[2] === 'addresses:add') {
    AddressControllers.addAddress(process.argv[3], process.argv[4], process.argv[5], process.argv[6])
} else if (process.argv[2] === 'addresses:update') {
    AddressControllers.updateAddress(process.argv[3], process.argv[4].split(','))
} else if (process.argv[2] === 'addresses:delete') {
    AddressControllers.deleteAddress(process.argv[3])
}


