const {contact,address} = require('../models')
const View_contact = require('../views/contact')

class Controller_contact{
  constructor(){

  }
  static command(order,input){
    if(order === 'list'){
      contact.findAll().then(dataAll=>{
        // console.log(dataAll)
        let arrContact = []
        for(let i=0;i<dataAll.length;i++){
          // console.log(dataAll[i].dataValues)
          arrContact.push(dataAll[i].dataValues)
        }
        View_contact.showAll(arrContact)
        process.exit()
      }).catch(err=>{
        View_contact.showErr(err)
      })
    }
    else if(order === 'listAll'){
        contact.findAll({
          include:[address]
        }).then(dataAll=>{
          let temp = JSON.parse(JSON.stringify(dataAll))
          View_contact.showAll(temp)
          process.exit()
        })
    }
    else if(order === 'showOne'){
      contact.findOne({where:{id:input},include:[address]}).then(data=>{
        let temp = JSON.parse(JSON.stringify(data))
        View_contact.showAll(temp)
        
        process.exit()
      })
    }
    else if(order === 'add'){
      let splitInput = input[0].split(',')
      let objAdd ={
        name : splitInput[0],
        email: splitInput[1],
        phone: splitInput[2],
        createdAt : new Date(),
        updatedAt : new Date()
      }
      // console.log(objAdd)
      contact.create(objAdd).then(()=>{
        View_contact.showAdd(objAdd)
        process.exit()
      })
    }
    else if(order === 'update'){
      // 'input,,,,' id
      let inputSplit = input[0].split(',')
      contact.findById(input[1]).then(dataId =>{
        let objUpdate ={
          name : inputSplit[0] === ''? dataId.dataValues.name:inputSplit[0],
          email: inputSplit[1] === ''? dataId.dataValues.email:inputSplit[1],
          phone: inputSplit[2] === ''? dataId.dataValues.phone:inputSplit[2],
          createdAt : new Date(),
          updatedAt : new Date()
        }
        contact.update(objUpdate,{where:{id:input[1]}}).then(()=>{
          View_contact.showUpdate(input[1])
          process.exit()
        })
      })
    }
    else if(order === 'delete'){
      contact.destroy({where:{id:input}}).then(()=>{
        View_contact.showDelete(input)
        process.exit()
      })
    }
  }

}

module.exports = Controller_contact