class Address {
    static showAll(datas) {
        datas.map((data) => {
            console.log(data.dataValues)
        })
        process.exit()
    }
}

module.exports = Address