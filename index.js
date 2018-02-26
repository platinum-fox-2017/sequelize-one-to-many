const Controller = require('./controller/controller.js');
const argv = process.argv;

Controller.command(argv[2], argv[3], argv.slice(4));
