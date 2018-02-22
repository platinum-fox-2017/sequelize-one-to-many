const {address} = require('../models')
const view = require('../views/address') 

class Address{
    static commandManage(command){
        if(command[0] === 'add'){
            let newData = command.splice(1)
            let obj = {
                street : newData[0],
                city: newData[1],
                zip_code : newData[2]
            }
            address.create(obj).then(result=>{
                view.showCreateData(result)
                process.exit()
            })
        }else if (command[0] === 'list'){
            address.findAll().then(data=>{
                data.map(result=>{
                    view.showAllData(result)
                })
                process.exit()
            })
        }else if(command[0] === 'update'){
            let newData = command.splice(2)
            address.findById(command[1]).then(data=>{
                address.update({
                    street : newData[0] === ',' ? data.street : newData[0],
                    city: newData[1] === ',' ? data.city : newData[1],
                    zip_code : newData[2] === ',' ? data.zip_code : newData[2]
                },{where:{id:command[1]}}).then(data2=>{
                    view.showUpdateData()
                    process.exit()
                })
            })
        }else if(command[0] === 'delete'){
            address.destroy({where:{id:command[1]}}).then(result=>{
                view.showDelete()
                process.exit()
            })
        }
    }
}

module.exports = Address