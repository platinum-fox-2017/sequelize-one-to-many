const Table = require('cli-table')
const Chalk = require('chalk')

class Help {
  constructor() {

  }
  static showHelp(){

    var t = new Table({
      head : ['No.','Function List','Address','Contact']
    });

    t.push(
      ['1.','showAll','show all Addresses','show all Contacts'],
      ['2.','showOne(id)','show one Address by Id','show one Contact by Id'],
      ['3.','add','add Address(city,street,zip_code)','add Contact(name,email,phone)'],
      ['4.','edit','edit Address(city,street,zip_code)','edit Contact(name,email,phone)'],
      ['5.','delete','delete Address','delete Contact'])

    console.log("" + t);
  }
}

module.exports = Help;
