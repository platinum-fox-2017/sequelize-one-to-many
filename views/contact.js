
class Contact{
    static showCreateData(result){
        console.log(result.dataValues)
    }
    static showAllData(result){
        console.log(result)
    }
    static showUpdateData(){
        console.log(`data berhasil di update`)
    }
    static showDelete(){
        console.log(`data berhasil di delete`)
    }
}

module.exports = Contact