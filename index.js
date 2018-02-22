const Controller = require('./controllers');

var argv_data = process.argv;

Controller.manageCommand(argv_data[2],argv_data.slice(3)) // array of strings