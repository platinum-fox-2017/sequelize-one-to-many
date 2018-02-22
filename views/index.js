"use strict"

class View {
    static simpleView(data) {
        console.log(data);
    }

    static failed() {
        console.log(`Error!!`)
    }
}

module.exports = View;