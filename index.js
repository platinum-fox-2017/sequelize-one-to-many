const Controller = require('./controller')
const View = require('./view')
const singularize = require("@nathanfaucett/singularize")
const inflections = require("@nathanfaucett/inflections");


var en = inflections("en");

en.singular(/s$/i, "");
en.singular(/(ch|sh|ss|[sxz])es$/i, "$1");
en.singular(/([^aeiouy])ies$/i, "$1y");

const argv = process.argv
const command = argv[2]
if(argv.length === 2) {
  View.help()
} else {
  // console.log(argv)
  var comSplit = command.split(':')
  var table = singularize(comSplit[0].charAt(0).toUpperCase() + comSplit[0].substring(1, comSplit[0].length))
  var addition = comSplit[1]
  // console.log(table)
  var options = argv.slice(3)
}

Controller.command(table, addition, options)