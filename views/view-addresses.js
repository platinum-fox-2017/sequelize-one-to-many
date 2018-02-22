
var Table = require('cli-table');

class ViewAddress {
    constructor(){

    }
    static list(data){
        var table = new Table({
            head: ['ID', 'Street', 'City', 'Zip Code']
        , colWidths: [5, 20, 20, 20]
        });
        for(let i=0; i<data.length; i++){
            let id = data[i].id
            let street = data[i].street
            let city = data[i].city
            let zip_code = data[i].zip_code
            table.push([id, street, city, zip_code])
        }
        console.log(table.toString())
    }
    static notifAdd(data){
        console.log('Data berhasil ditambahkan')
    }
    static notifUpdate(data){
        console.log('Data berhasil diubah')
    }
    static notifDelete(data){
        console.log('Data berhasil dihapus')
    }
}

module.exports = ViewAddress