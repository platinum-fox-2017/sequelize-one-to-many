const Sequelize = require('sequelize');
const Models = require('../models');
const Views = require('../views/addresses');

class Controller_addresses{
    static add(new_addresses){
        let object ={};
        object.street = new_addresses[0];
        object.city = new_addresses[1];
        object.zip_code = new_addresses[2];
       Models.Addresses.create(object)
        .then((data)=> {
            Views.show(data.dataValues);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        });
    }
    static read_one(new_addresses){
       Models.Addresses.findById(new_addresses[0])
        .then((data)=>{
            Views.show(data.dataValues);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        });
    }
    static read_all(){
       Models.Addresses.findAll()
        .then((data)=>{
            data = data.map((v,i,a)=> {
                return v.dataValues;
            })
            Views.show_multiple(data);
            process.exit();
        })
        .catch((err)=>{
            console.log(err);
            process.exit();
        })
    }
    static update(new_addresses){
       Models.Addresses.update({
            street: new_addresses[1],
            city: new_addresses[2],
            zip_code: new_addresses[3]
        },{
            where: {
                id :new_addresses[0]
            }
        })
        .then((data)=>{
            process.exit();
        })
    }
    static delete(new_addresses){
       Models.Addresses.destroy({
            where:{
                id:new_addresses[0]
            }
        })
        .then((data)=>{
            process.exit();
        })
    }
}

module.exports = Controller_addresses;