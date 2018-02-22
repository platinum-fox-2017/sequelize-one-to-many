'use strict'
var fs = require('fs')
var contact_csv = fs.readFileSync('./contacts.csv','utf8')
  .toString()
  .split("\n")
  var conObj=[]
  for(var i=0;i<contact_csv.length-1;i++) {
    let obj={}
    let pisah=contact_csv[i].toString().split(',')
    for(var j=1;j<pisah.length;j++) {
      obj['name']=pisah[1];
      obj['email']=pisah[2];
      obj['phone']=pisah[3];
      obj['createdAt']=new Date() ;
      obj['updatedAt']=new Date();
    }
    conObj.push(obj);
  }


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contacts', conObj, {});
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
