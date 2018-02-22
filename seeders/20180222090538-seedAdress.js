'use strict'
var fs = require('fs')
var address_csv = fs.readFileSync('./addresses.csv','utf8')
  .toString()
  .split("\n")
  var addObj=[]
  for(var i=0;i<address_csv.length-1;i++) {
    let obj={}
    let pisah=address_csv[i].toString().trim().split(',')
    for(var j=1;j<pisah.length;j++) {
      obj['street']=pisah[1];
      obj['city']=pisah[2];
      obj['zip_code']=pisah[3];
      obj['createdAt']=new Date();
      obj['updatedAt']=new Date();
    }
    addObj.push(obj);
  }
  console.log(addObj);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', addObj, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
