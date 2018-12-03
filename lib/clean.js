const fs = require('fs');
const path = require('path');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const base = 'test';


const readDir = function(base, newDir) {
    if( newDir && !fs.existsSync(newDir) ) {
        fs.mkdir(path.join(__dirname, newDir), (err) => {
            if(err) {
                console.log("ERROR", err);
            }
        })
    }

    fs.readdir( base, (err, files)=>{
        if(err) {
            console.log("ERROR", err);
        }

        files.forEach((item) => {
            let localBase = path.join(base, item);
            let stat = fs.statSync(localBase);
            if(stat.isDirectory()) {
                readDir(localBase, newDir);
            } else {
                readDir(newDir, path.join(newDir, item[0]));
                readFile(localBase, 'utf-8').then(data => {
                    writeFile(path.join(newDir, item[0], item), data).then(() => {
                        console.log('Done')
                    })
                })
            }
            
        })
    })
    
};

module.exports = readDir