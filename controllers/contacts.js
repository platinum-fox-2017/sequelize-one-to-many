const {contacts, addresses} = require('../models');
const view = require('../views/contacts.js');

class Contacts {
  constructor() {

  }
  static list(){
    contacts.findAll({
      include : [
        {model: addresses}
      ]
    }).then(data => {
      let result = []
      for(let i=0; i<data.length; i++){
        result.push(data[i].dataValues)
      }
      view.showData(result)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static add(data){
    contacts.create({
      name : data[0],
      email : data[1],
      phone : data[2]
    }).then(data => {
      view.showAdd(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static update(data){
    let obj = {}
    for(let i=0; i<data.length; i++){
      if(i%2 !== 0){
        obj[data[i]] = data[i+1]
      }
    }
    contacts.update(obj, {
      where:{
        id : data[0]
      }
    }).then(result => {
      view.showUpdate(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static delete(data){
    contacts.destroy({where: {id : data}
    }).then(result => {
      view.showDelete(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
  static findAddresses(data){
    contacts.findOne({
      include: {model: addresses},
      where: {id : data}
    }).then(data => {
      view.showAddresses(data)
      process.exit()
    }).catch(error => {
      console.log(error)
      process.exit()
    })
  }
}

module.exports = Contacts;
