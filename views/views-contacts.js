
var Table = require('cli-table');

class ViewContacts {
    constructor(){

    }
    static list(data){
        var table = new Table({
            head: ['ID', 'Name', 'Email', 'Phone']
        , colWidths: [5, 20, 20, 20]
        });
        for(let i=0; i<data.length; i++){
            let id = data[i].id
            let name = data[i].name
            let email = data[i].email
            let phone = data[i].phone
            table.push([id, name, email, phone])
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

module.exports = ViewContacts