const models = require('../models')
const views = require('../view')
class Controller{
  constructor(input2,input3,input4,input5){
    this.input2=input2
    this.input3=input3
    this.input4=input4
    this.input5=input5

  }
  showData(){
     if(this.input3==='add'){
        var obj={};
        var newData=this.input4
        var pisah= newData.split(',')
        if(this.input2==='contacts'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='name'){
              obj.name=titikDua[1]
            }
            else if (titikDua[0]==='email') {
              obj.email=titikDua[1]
            }
            else if (titikDua[0]==='phone') {
              obj.phone=titikDua[1]
            }
          }
          models.Contact.create(obj);
        }
        else if(this.input2==='addresses'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='street'){
              obj.street=titikDua[1]
            }
            else if (titikDua[0]==='city') {
              obj.city=titikDua[1]
            }
            else if (titikDua[0]==='zip_code') {
              obj.zip_code=titikDua[1]
            }
          }
          models.Address.create(obj);
        }

      }
      else if(this.input3==='list'){
        if(this.input2==='contacts'){
          models.Contact.findAll({
            raw:true,
          }).then(contactsData => {
             views.printView(contactsData)
          });
        }
        else if(this.input2==='addresses'){
          models.Address.findAll({
            raw:true,
          }).then(addressesData => {
             views.printView(addressesData)
          });
        }
      }

      else if(this.input3==='update'){
        var obj={};
        var newData=this.input4
        var pisah= newData.split(',')
        if(this.input2==='contacts'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if(titikDua[0]==='name'){
              obj.name=titikDua[1]
            }
            else if (titikDua[0]==='email') {
              obj.email=titikDua[1]
            }
            else if (titikDua[0]==='phone') {
              obj.phone=titikDua[1]
            }
          }
          models.Contact.update(
            obj, {
            where: {
              id: this.input5
            }
          });
        }
        else if(this.input2==='addresses'){
          for(let i=0;i<pisah.length;i++){
            var titikDua=pisah[i].toString().split(':')
            if (titikDua[0]==='street') {
              obj.street=titikDua[1]
            }
            else if (titikDua[0]==='city') {
              obj.city=titikDua[1]
            }
            else if (titikDua[0]==='zip_code') {
              obj.zip_code=titikDua[1]
            }
          }
          models.Address.update(
            obj, {
            where: {
              id: this.input5
            }
          });
        }
      }


      else if(this.input3==='delete'){
        if(this.input2==='contacts'){
          models.Contact.destroy({
            where: {
              id: this.input4
            }
          });
        }
        else if(this.input2==='addresses'){
            models.Address.destroy({
              where: {
                id: this.input4
              }
            });
        }
      }

      else if(this.input3==='findAddress'){

        models.Contact.findAll({include: models.Address,raw:true,
           where: { id: this.input4 }})
           .then(contactsData => {
              views.printView(contactsData)
           });
      }

    }
  }


module.exports = Controller
