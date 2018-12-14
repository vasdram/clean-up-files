const createDirForName = require('./cleanFoName')
var program = require('commander')

program
  .version('1.0.0')
  .option('-i, --in [folder]', 'In dir')
  .option('-o, --out [folder]', 'Out dir')
  .parse(process.argv)

createDirForName(program.in, program.out)
