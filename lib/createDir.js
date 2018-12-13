const fs = require('fs')

const createDir = function (newDir) {
  if (newDir && !fs.existsSync(newDir)) {
    fs.mkdir(newDir, { recursive: true }, (err) => {
      if (err) {
        console.log('ERROR', err)
      }
    })
  }
}

module.exports = createDir
