const {address} = require('../models')
const View_address = require('../views/address')

class Controller_address{
  constructor(){

  }
  static command(order,input){
    // console.log(order,'-----------------')
    if(order === 'list'){
      address.findAll().then(dataAll=>{
        // console.log(dataAll)
        let arraddress = []
        dataAll.map(detailData=>{
          arraddress.push(detailData.dataValues)
        })
        View_address.showAll(arraddress)
        process.exit()
      }).catch(err=>{
        View_address.showErr(err)
      })
    }
    else if(order === 'add'){
      let splitInput = input[0].split(',')
      let objAdd ={
        street : splitInput[0],
        city: splitInput[1],
        zip_code: splitInput[2],
        id_contact:splitInput[3],
        createdAt : new Date(),
        updatedAt : new Date()
      }
      // console.log(objAdd)
      address.create(objAdd).then(()=>{
        View_address.showAdd(objAdd)
        process.exit()
      }).catch(err=>{
        View_address.showErr(err)
      })
    }
    else if(order === 'update'){
      // 'input,,,,' id
      let inputSplit = input[0].split(',')
      address.findById(input[1]).then(dataId =>{
        let objUpdate ={
          street : inputSplit[0] === ''? dataId.dataValues.street:inputSplit[0],
          city: inputSplit[1] === ''? dataId.dataValues.city:inputSplit[1],
          zip_code: inputSplit[2] === ''? dataId.dataValues.zip_code:inputSplit[2],
          id_contact:inputSplit[3] === ''? dataId.dataValues.id_contact:inputSplit[3],
          createdAt : new Date(),
          updatedAt : new Date()
        }
        address.update(objUpdate,{where:{id:input[1]}}).then(()=>{
          View_address.showUpdate(input[1])
          process.exit()
        })
      })
    }
    else if(order === 'delete'){
      address.destroy({where:{id:input}}).then(()=>{
        View_address.showDelete(input)
        process.exit()
      }).catch(err=>{
        View_address.showErr(err)
      })
    }
    else if(order === 'full_address'){
      address.findOne({where:{id:input}}).then(data=>{
        let detail = JSON.parse(JSON.stringify(data))
        let newAdd = new address()
        View_address.showAll(newAdd.full_address(detail.street,detail.city,detail.zip_code)) 
        
        process.exit()
      })
    }
    else if(order === 'north_area'){
      address.north_area().then(data=>{
        // console.log(data)
        let temp = JSON.parse(JSON.stringify(data))
        View_address.showAll(temp)
        process.exit()
      })
    }
    else if(order === 'south_area'){
      address.south_area().then(data=>{
        // console.log(data)
        let temp = JSON.parse(JSON.stringify(data))
        View_address.showAll(temp)
        process.exit()
      })
    }
  }

}
// address.prototype.full_address('jalan','city',15532)
module.exports = Controller_address