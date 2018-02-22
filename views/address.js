class View_address{
  constructor(){

  }
  static showAll(dataAll){
    console.log(dataAll)
  }
  static showErr(err){
    console.log(err)
  }
  static showAdd(dataAdd){
    console.log(dataAdd)
  }
  static showUpdate(id){
    console.log(`Data dengan id : ${id} berhasil diupdate`)
  }
  static showDelete(id){
    console.log(`Data dengan id: ${id} berhasil didelete`)
  }

}

module.exports = View_address