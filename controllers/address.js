const {Addresses} = require('../models')
const AddressView = require ('../views/addressView.js')


class Address {
  constructor() {

  }

  static showAll(){
    Addresses.findAll()
    .then(function(data){
      AddressView.showAddress(data)
      process.exit()
    })
    .catch(function(err){
      console.log(err);
    })
  }

  static showOne(data){
    Addresses.findOne({
      where :{
        id : data
      }
    })
    .then(function(data){
      AddressView.showAddress([data])
      process.exit()
    })
    .catch(function(err){
      console.log(err);
    })
  }

  static add(input){
    Addresses.create({
      street : input[0],
      city : input[1],
      zip_code : input[2],
      id_contact : input[3]
    }).then(function(){
      console.log(`data ${input[0]} berhasil dibuat`);
      process.exit()
    })
    .catch(function(err){
      console.log('ada yang masukin datanya salah nich');
    })
  }

  static delete(data){
    Addresses.destroy({
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
    Addresses.update({
      street : edit[0],
      city : edit[1],
      zip_code : edit[2]
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
}

module.exports = Address;
