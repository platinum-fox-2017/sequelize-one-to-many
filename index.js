const argv = process.argv;
var sequelize = require('sequelize');
const Controller = require('./controller')

var controller = new Controller(argv[2],argv[3],argv[4],argv[5]);
controller.showData()
