const models = require('../models');

class Contacts {
  static list(){
    // models.Contact.findAll({raw:true}).then((dataContact) => {
    //   console.log(dataContact);
    // });
    models.Contact.findAll({include: [{model:models.Address}]}).then((dataContact) => {
      console.log(dataContact);
      process.exit();
    });
  }
  static add(input3){
    models.Contact.create({name:input3[0],email:input3[1],phone:input3[2]})
    .then((dataContact) => {
      models.Contact.findAll({raw:true}).then((dataContact) => {
        console.log(dataContact[dataContact.length-1]);
      });
    });
  }
  static update(input3){
    models.Contact.update({
      name:input3[1],email:input3[2],phone:input3[3]},
      {where:{id:
        input3[0]}});
  }
  static delete(input3){
    models.Contact.destroy({
      where:{id:input3}
    });
  }
}
module.exports = Contacts;
