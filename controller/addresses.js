const models = require('../models');

class Addresses {
  static list(){
    // models.Address.findAll({raw:true}).then((dataAddress) => {
    //   console.log(dataAddress);
    // });
    models.Address.findAll({include: [{model:models.Contact}]}).then((dataAddress) => {
      console.log(dataAddress);
      process.exit();
    });
  }
  static add(input3){
    models.Address.create({street:input3[0],city:input3[1],zip_code:input3[2]})
    .then((dataAddress) => {
      models.Address.findAll({raw:true}).then((dataAddress) => {
        console.log(dataAddress[dataAddress.length-1]);
      });
    });
  }
  static update(input3){
    models.Address.update({
      street:input3[1],city:input3[2],zip_code:input3[3]},
      {where:{id:
        input3[0]}});
  }
  static delete(input3){
    models.Address.destroy({
      where:{id:input3}
    });
  }
}
module.exports = Addresses;
