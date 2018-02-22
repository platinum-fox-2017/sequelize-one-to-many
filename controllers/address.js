const { Address } = require('../models');

class Controller {

    static parsingData(task, data) {
        console.log(task, data)
        if (task === 'list') {
            this.showList()
        } else if (task === 'add') {
            this.addData(data)
        } else if (task === 'update') {
            this.updateData(data)
        } else if (task === 'delete') {
            this.deleteData(data)
        } else if (task === 'full_address') {
            this.full_addresses(data)
        }
    }

    static full_addresses(data) {
        Address.findOne({ where:{id:data[0]} })
            .then(data => {
                data.full_address();
                process.exit()
            })
            .catch(err => {
                console.log(err);
                process.exit()
            })
    }

    static showList() {
        Address.findAll({raw:true})
        .then(data => {
            console.log(data);
            process.exit()
        })
        .catch(err => {
            console.log(err);
            process.exit()
        })
    }

    static addData(data) {
        Address.create({
            street: data[0],
            city: data[1],
            zip_code: data[2]
        })
        .then(data => {
            console.log(`Success Insert Data`)
            process.exit()
        })
        .catch(err => {
            console.log(err);
            process.exit()
        })
    }

    static updateData(data) {
        Address.findById(data[0])
        .then(getData => {
            let getObject = Object.keys(getData.dataValues)
             for (let j = 1; j < data.length; j++) {
                let matchObj = data[j].split(':')
                if (matchObj[0] === 'street') {
                    getData.dataValues.street = matchObj[1]
                } else if (matchObj[0] === 'city') {
                    getData.dataValues.city = matchObj[1]
                } else if (matchObj[0] === 'zip_code') {
                    getData.dataValues.zip_code = matchObj[1]
                }
             }
             Address.update({
                 street: getData.dataValues.street,
                 city: getData.dataValues.city,
                 zip_code: getData.dataValues.zip_code
             }, {
                 where: { id: getData.dataValues.id }
             })
             .then(data => {
                 console.log('Success Update Data');
                 process.exit()
             })
             .catch(err => {
                 console.log(err)
                 process.exit()
             })
        })
        .catch(err => {
            console.log(err)
        })
    }

    static deleteData(data) {
        Address.destroy({
            where: { id: data[0] }
        })
            .then(data => {
                console.log(`Success Delete Data`)
                process.exit()
            })
            .catch(err => {
                console.log(err)
                process.exit()
            })
    }

}

module.exports = Controller