const {Addresses,Contacts} = require('../models')
const ContactView = require ('../views/contactsView.js')


class Contact {
  constructor() {

  }

  static showAll(){
    Contacts.findAll()
    .then(function(data){
      ContactView.showContact(data)
      process.exit()
    })
    .catch(function(err){
      console.log(err);
    })
  }

  static showOne(data){
    Contacts.findOne({
      where :{
        id : data
      }
    })
    .then(function(data){
      ContactView.showContact([data])
      process.exit()
    })
    .catch(function(err){
      console.log(err);
    })
  }

  static add(input){
    Contacts.create({
      name : input[0],
      email : input[1],
      phone : input[2]
    }).then(function(){
      console.log(`data ${input[0]} berhasil dibuat`);
      process.exit()
    })
    .catch(function(err){
      console.log('ada yang masukin datanya salah nich');
    })
  }

  static delete(data){
    Contacts.destroy({
      where:{
        id:data
      }
    }).then(function(err){
      console.log(`data berhasil didelete`);
      process.exit()
    })
    .catch(function(err){
      console.log(`error pas delete mas`);
    })
  }

  static edit(target,edit){
    Contacts.update({
      name : edit[0],
      email : edit[1],
      phone : edit[2]
    },{
      where:{
        id:target
      }
    }).then(function(){
      console.log('data berhasil diedit')
      process.exit()
    })
    .catch(function(err){
      console.log('edit data gagal');
    })
  }


  static showContactAddress(){
    Contacts.findAll({
      include:Addresses
    })
    .then(function(data){
      ContactView.showContactAddress(data)
      process.exit()
    })
    .catch(function(err){
      console.log(err);
    })
  }
}
module.exports = Contact;
