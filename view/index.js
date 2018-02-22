"use strict"

class View{
  static printAll(data) {
    console.log(data);
    process.exit();
  }

  static help() {
    console.log(`======DOCUMENTATION======`);
    console.log(`node index.js <nama table>:<list>`);
    console.log(`node index.js <nama table>:<add> nama, email, phone`);
    console.log(`node index.js <nama table>:<update> id, namacolumn, value`);
    console.log(`node index.js <nama table>:<delete> id`);
  }

  static addFile() {
    console.log(`database berhasil ditambah!`);
    process.exit();
  }

  static updateData(table, option, projects) {
    if(projects == 1) {
      console.log(`Table ${table} dengan ${option[1]} menjadi ${option[2]} berhasil diganti!`);
    } else {
      console.log(`Data tidak berhasil diUpdate, mohon di cek kembali`);
    }
    process.exit();
  }

  static deleteData(table, option, projects) {
    if(projects == 1) {
      console.log(`Table ${table} dengan id: ${option[0]} sudah berhasil dihapus`);
    } else {
      console.log(`Data tidak berhasil diUpdate, mohon di cek kembali`);
    }
    process.exit();
  }


}

module.exports = View;
