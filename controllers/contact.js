const { Contact, Address } = require('../models');

class Controller {

    static parsingData(task, data) {
        if (task === 'list') {
            this.showList()
        } else if (task === 'add') {
            this.addData(data)
        } else if (task === 'update') {
            this.updateData(data)
        } else if (task === 'delete') {
            this.deleteData(data)
        } else if (task === 'find_one') {
            this.findOne(data)
        }
    }

    //Find All Release 2 - 1
    static showList() {
        Contact.findAll({
            include: Address
        })
        .then(data => {
            let convertData = JSON.parse(JSON.stringify(data))
            console.log(convertData);
            process.exit()
        })
        .catch(err => {
            console.log(err);
            process.exit()
        })
    }

    //Find ById Release 2 - 2
    static findOne(data) {
        Contact.findOne({
            where: { id: data[0] }, include: {model: Address}
        })
        .then(data => {
            let convertData = JSON.parse(JSON.stringify(data))
            console.log(convertData)
            process.exit()
        })
        .catch(err => {
            console.log(err)
            process.exit()
        })
    }

    static addData(data) {
        Contact.create({
            name: data[0],
            email: data[1],
            phone: data[2]
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
        Contact.findById(data[0])
        .then(getData => {
            let getObject = Object.keys(getData.dataValues)
             for (let j = 1; j < data.length; j++) {
                let matchObj = data[j].split(':')
                if (matchObj[0] === 'name') {
                    console.log('masuk ke name')
                    getData.dataValues.name = matchObj[1]
                } else if (matchObj[0] === 'email') {
                    getData.dataValues.email = matchObj[1]
                } else if (matchObj[0] === 'phone') {
                    getData.dataValues.phone = matchObj[1]
                }
             }
             Contact.update({
                 name: getData.dataValues.name,
                 email: getData.dataValues.email,
                 phone: getData.dataValues.phone
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
        Contact.destroy({
            where : {id: data[0]}
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