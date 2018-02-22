class AddressView {
    static display(data){
        for (let i = 0; i < data.length; i++){
            console.log(data[i])
        }
    }
    static log(data){
        console.log(data)
    }
}

module.exports = AddressView