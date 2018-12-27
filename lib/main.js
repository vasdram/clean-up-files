#!/usr/bin/env node
const createDirForName = require('./cleanFoName')
var program = require('commander')
var Watcher = require('./watcher')

let watcher = new Watcher(() => {
  console.log('Comlete')
})

program
  .version('1.0.0')
  .option('-i, --in [folder]', 'In dir')
  .option('-o, --out [folder]', 'Out dir')
  .parse(process.argv)

createDirForName(program.in, program.out)
