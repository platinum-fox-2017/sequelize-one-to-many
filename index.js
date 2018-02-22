"use strict"
const Controller = require('./controller/')

let start = process.argv

Controller.navigation(start[2],start.slice(3))
