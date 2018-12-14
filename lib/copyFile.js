const fs = require('fs')

const copyFile = (source, destination) => {
  fs.copyFile(source, destination, (err) => {
    if (err) throw err
  })
}

module.exports = copyFile
