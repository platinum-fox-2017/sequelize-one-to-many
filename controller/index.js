"use strict"
const view = require('../view')
const model = require('../models')

class Controller{
  static navigation(command, option) {
    switch(command){
      case "contacts:list":
        model.Contact.findAll({raw:true}).then(projects => {
          view.printAll(projects)
        }); break;

      case "contacts:add":
        model.Contact.create({
          name: option[0],
          email: option[1],
          phone: option[2] }).then(projects => {
          view.addFile()
        }); break;

      case "contacts:update":
        let objContact = {}
        objContact[option[1]] = option[2]
        model.Contact.update(objContact, {where:{id: option[0]}}).then(projects => {
          view.updateData('Contact', option, projects)
        }); break;

      case "contacts:delete":
        model.Contact.destroy({where:{id: option[0]}}).then(projects => {
          view.deleteData('Contact', option, projects)
        }); break;

      case "addresses:list":
        model.Address.findAll({raw:true}).then(projects => {
          view.printAll(projects)
        }); break;

      case "addresses:add":
        model.Address.create({
          street: option[0],
          city: option[1],
          zip_code: option[2] }).then(projects => {
          view.addFile()
        }); break;

      case "addresses:update":
        let objAddress = {}
        objAddress[option[1]] = option[2]
        model.Address.update(objAddress, {where:{id: option[0]}}).then(projects => {
          view.updateData('Address', option, projects)
        }); break;

      case "addresses:delete":
        model.Address.destroy({where:{id: option[0]}}).then(projects => {
          view.deleteData('Address', option, projects)
        }); break;

      case "help": view.help(); break;
      default: view.help()
    }
  }
}

module.exports = Controller;
