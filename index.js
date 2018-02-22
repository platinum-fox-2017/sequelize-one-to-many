'use strict';

const control = require("./controls")

let input = process.argv;

control.main(input[2], input.splice(3));

