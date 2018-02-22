const Table = require('cli-table');

class Contacts {
  constructor() {

  }
  static showData(data){
    let result = []
    for(let i=0; i<data.length; i++){
      let array = []
      for(let j=0; j<data[i].addresses.length; j++){
        array.push(data[i].addresses[j].dataValues)
      }
      let obj = {
        id : data[i].id,
        name : data[i].name,
        email : data[i].email,
        phone : data[i].phone,
        addresses: array
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
  static showAddresses(data){
    let result = []
    for(let i=0; i<data.addresses.length; i++){
      result.push(data.addresses[i].dataValues)
    }
    console.log(`Rumah ${data.name}:`)
    console.log(result)
  }
}

module.exports = Contacts;
