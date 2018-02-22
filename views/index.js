const Table = require('cli-table');
class View {
  static printResult(result){
    let tHead = [];
    for ( let property in result[0] ) {
      tHead.push(property);
    }
    var table = new Table({
        head: tHead
    });
    for (var i = 0; i < result.length; i++) {
      let dataPerRow = [];
      for ( let property in result[i] ) {
        dataPerRow.push(result[i][property]);
      }
      table.push(dataPerRow);
    }
    console.log(table.toString());  
  }
  static successToAdd(table){
    console.log(`Berhasil Menambah Data ${table}`);
  }
  static failToAdd(table){
    console.log(`Gagal Menambah Data ${table}`);
  }
  static successToUpdate(table){
    console.log(`Berhasil Mengubah Data ${table}`);
  }
  static failToUpdate(table){
    console.log(`Gagal Mengubah Data ${table}`);
  }
  static successToDelete(table){
    console.log(`Berhasil Menghapus Data ${table}`);
  }
  static failToDelete(table){
    console.log(`Gagal Menghapus Data ${table}`);
  }
}
module.exports = View;
