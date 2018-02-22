// sequelize model:generate --name Contact --attributes name:string,email:string,phone:STRING
// sequelize model:generate --name Address --attributes street:string,city:string,zip_code:STRING
const Controller = require('./controller/index.js')

let argv = process.argv;

Controller.readCommands(argv);
