
const Controller_contacts = require('./controllers/contacts');
const Controller_addresses = require('./controllers/addresses');

let args = process.argv.slice(2);
let table = args[0];
let command = args[1];

let new_contact = process.argv.slice(4);
let new_address = process.argv.slice(4);

if(table === 'contacts'){
    if(command === 'create') Controller_contacts.add(new_contact);
    if(command === 'read_one') Controller_contacts.read_one(new_contact);
    if(command === 'read_all') Controller_contacts.read_all();
    if(command === 'update') Controller_contacts.update(new_contact);
    if(command === 'delete') Controller_contacts.delete(new_contact);
}
if(table === 'addresses'){
    if(command === 'create') Controller_addresses.add(new_address);
    if(command === 'read_one') Controller_addresses.read_one(new_address);
    if(command === 'read_all') Controller_addresses.read_all();
    if(command === 'update') Controller_addresses.update(new_address);
    if(command === 'delete') Controller_addresses.delete(new_address);
}