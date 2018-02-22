const Controller = require('./controllers.js')

const argv = process.argv
const syntax = argv[2]
const option = argv.slice(3)



Controller.command(syntax, option)