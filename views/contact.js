class Contact {
  constructor() {

  }
  static show_data(data){
    console.log(data);
  }

  static show_add(data) {
    console.log(data);
    process.exit()
  }

  static show_update(data) {
    console.log(data)
    process.exit()
  }

  static show_delete(data) {
    console.log(`Succesfully delete ${data}`);
    process.exit()
  }

  static last(data) {
    console.log(data);
  }
}

module.exports = Contact
