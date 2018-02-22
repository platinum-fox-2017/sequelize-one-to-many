'use strict';

const fs = require('fs');
let data = fs.readFileSync('./addresses.csv','utf-8');
    data = data.trim().split('\n');
        data = data.map((v,i,a)=>{
          return v.split(',');
        })
let array_contact =[];
let object ={};
    for(let i=0; i<data.length;i++){
      for(let j=0; j<data[i].length; j++){
        if(j===1)object.street = data[i][j];
        if(j===2)object.city = data[i][j];
        if(j===3)object.zip_code = data[i][j];
        object.createdAt = new Date();
        object.updatedAt = new Date();
        }
          array_contact.push(object);
          object ={};
    }
    // console.log(array_contact);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', array_contact);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};


