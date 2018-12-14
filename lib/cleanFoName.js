const fs = require('fs')
const path = require('path')
const util = require('util')
const createDir = require('./createDir')
const copyFile = require('./copyFile')

const createDirForName = function (base, out) {
  if (!fs.existsSync(out)) {
    createDir(out)
  }
  fs.readdir(base, (err, files) => {
    if (err) {
      console.log('ERROR', err)
    }

    files.forEach((item) => {
      let localBase = path.join(base, item)
      let stat = fs.statSync(localBase)

      if (stat.isDirectory()) {
        createDirForName(localBase, out)
      } else {
        createDir(path.join(out, item[0]))
        copyFile(path.join(base, item), path.join(out, item[0], item))
      }
    })
  })
}

module.exports = createDirForName
