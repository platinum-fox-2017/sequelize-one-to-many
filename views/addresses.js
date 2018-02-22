const Table = require('cli-table');

class Addresses {
  constructor() {

  }
  static showData(data){
    let result = []
    for(let i=0; i<data.length; i++){
      let obj = {
        id : data[i].id,
        street : data[i].street,
        city : data[i].city,
        zip_code : data[i].zip_code,
        contact : data[i].contact.dataValues
      }
      result.push(obj)
    }
    console.log(result)
  }
  static showAdd(data){
    console.log('Data berikut berhasil ditambahkan')
    console.log(data)
  }
  static showUpdate(data){
    console.log('Data dengan ID: '+data[0]+' berhasil diubah')
    console.log(data[1]+' : '+data[2])
  }
  static showDelete(data){
    console.log('Data dengan ID: '+data+' berhasil dihapus');
  }
}

module.exports = Addresses;
