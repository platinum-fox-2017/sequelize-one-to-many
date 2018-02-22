class ContactView {

    static showAll(datas) {
        datas.map((data) => {
            console.log(data.dataValues);
        })
        process.exit()
    }

    static showAllwithAddress(datas) {
        datas.map((data) => {
            console.log(data.dataValues)
        })
        process.exit()
    }

    static findAddressByContactId(datas) {
        datas.dataValues.Addresses.map((address) => {
            console.log(address.dataValues)
        })
        process.exit()
    }

}

module.exports = ContactView