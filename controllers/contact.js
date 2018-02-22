const {contact,address} = require('../models')
const view = require('../views/contact') 


class Contact{
    static commandManage(command){
        if(command[0] === 'add'){
            let newData = command.splice(1)
            let obj = {
                name : newData[0],
                email: newData[1],
                phone : newData[2]
            }
            contact.create(obj).then(result=>{
                view.showCreateData(result)
                process.exit()
            })
        }else if (command[0] === 'list'){
            contact.findAll({include:address}).then(dataPalsu=>{
               let data = JSON.parse(JSON.stringify(dataPalsu))
                view.showAllData(data)
            })
                
        }else if(command[0] === 'update'){
            let newData = command.splice(2)
            contact.findById(command[1]).then(data=>{
                contact.update({
                    name : newData[0] === ',' ? data.name : newData[0],
                    email: newData[1] === ',' ? data.email : newData[1],
                    phone : newData[2] === ',' ? data.phone : newData[2]
                },{where:{id:command[1]}}).then(data2=>{
                    view.showUpdateData()
                    process.exit()
                })
            })
        }else if(command[0] === 'delete'){
            contact.destroy({where:{id:command[1]}}).then(result=>{
                view.showDelete()
                process.exit()
            })
        }
    }
}

module.exports = Contact