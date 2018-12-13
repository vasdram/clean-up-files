const fs = require('fs')
const path = require('path')

const createDir = function (newDir, result) {
  let pathDir = newDir
  if (typeof result !== 'undefined') {
    pathDir = path.resolve(result, newDir)
  }
  console.log(pathDir)
  if (newDir && !fs.existsSync(newDir)) {
    fs.mkdir(pathDir, { recursive: true }, (err) => {
      if (err) {
        console.log('ERROR', err)
      }
    })
  }
}

module.exports = createDir
