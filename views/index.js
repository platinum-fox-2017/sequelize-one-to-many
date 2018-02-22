// const Table = require("cli-table");
// const chalk = require("chalk");
const Models = require('../models');


class Views {
    constructor() {
    }

    static showHelp() {
        console.log('=======================CONTACTS======================')
        console.log('contacts:list');
        console.log('contacts:add<space> name email phone');
        console.log('contacts:update<space> id column value');
        console.log('contacts:delete<space> id');
        console.log('=======================ADDRESSES=====================')
        console.log('addresses:list');
        console.log('addresses:add<space> street city zip_code');
        console.log('addresses:update<space> id column value');
        console.log('addresses:delete<space> id');
    }

    static showList(arrObj) {
        console.log(arrObj);
    }

    static addContact(Contact,created) {
        console.log(Contact.get({
            plain: true
            }))
        console.log(created)
    }

    static addAddresses(Addresses,created) {
        console.log(Addresses.get({
            plain: true
            }))
        console.log(created)
    }

    static updateContact() {
        console.log('Successfully update')
    }

    static updateAddresses() {
        console.log('Successfully update')
    }

    static deleteContact() {
        console.log('Successfully deleted')
    }

    static deleteAddresses() {
        console.log('Successfully deleted')
    }



}


module.exports = Views;