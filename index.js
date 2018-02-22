const MainController = require('./controllers/index');
const argv = process.argv;
MainController.routeCommand(argv[2],argv.slice(3));
