let control = require('./controllers/controller.js')
let argv = process.argv;

if(argv[2] === null){
    console.log('contacts list  ---  untuk menampilkan daftar kontak')
    console.log('contacts add  ---  untuk menambahkan data kontak')
    console.log('contacts update  ---  untuk mengubah kontak')
    console.log('contacts delete  ---  untuk menghapus data kontak')
} else {
    // kirim option, act, dan value
    control.manageOption(argv[2], argv[3], argv.slice(4))
}
