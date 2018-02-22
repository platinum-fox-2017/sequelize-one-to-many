const Table = require('cli-table')

class AddressView {
    static listView(data) {
        var table = new Table({
            head: ['id', 'street', 'city', 'zip_code']
        });

        for (let i = 0; i < data.length; i++) {
            let arrData = []
            arrData.push(data[i].id);
            arrData.push(data[i].street);
            arrData.push(data[i].city);
            arrData.push(data[i].zip_code);
            table.push(arrData)
        }
        console.log(table.toString());
    }

    static addView(data) {
        console.log("Berhasil menambahkan data : " + data);   
    }

    static updateView(id) {
        console.log("Data pada id ke - " + id + " berhasil di update !");
    }

    static deleteView(id) {
        console.log("Data pada id ke - " + id + " berhasil di hapus !");
    }

    static errorView(err) {
        console.log(err);
    }

    static northAreaView(northAddresses) {
        console.log('====================================');
        console.log('LIST OF ADDRESS IN NORTH AREA : ');
        console.log('====================================');
        var table = new Table({
            head: ['id', 'street', 'city', 'zip_code']
        });

        for (let i = 0; i < northAddresses.length; i++) {
            let arrData = []
            arrData.push(northAddresses[i].id);
            arrData.push(northAddresses[i].street);
            arrData.push(northAddresses[i].city);
            arrData.push(northAddresses[i].zip_code);
            table.push(arrData)
        }
        console.log(table.toString());        
    }

    static southAreaView(southAddresses) {
        console.log('====================================');
        console.log('LIST OF ADDRESS IN SOUTH AREA : ');
        console.log('====================================');
        var table = new Table({
            head: ['id', 'street', 'city', 'zip_code']
        });

        for (let i = 0; i < southAddresses.length; i++) {
            let arrData = []
            arrData.push(southAddresses[i].id);
            arrData.push(southAddresses[i].street);
            arrData.push(southAddresses[i].city);
            arrData.push(southAddresses[i].zip_code);
            table.push(arrData)
        }
        console.log(table.toString());        
    }

    static fullAddressView(data) {
        console.log(data);
    }
}

module.exports = AddressView;