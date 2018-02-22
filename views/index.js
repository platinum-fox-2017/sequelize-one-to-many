class View {
  static printResult(result){
    console.log(result);

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
