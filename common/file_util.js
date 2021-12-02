const fs = require("fs");

const FileUtil = {
    writeFile: (content) => {
        fs.writeFile('./log.txt', content, {}, function(err){
            if(err) throw err;
            console.log("write file done!");
        });
    },

    readFile: (callback) => {
        fs.readFile("./log.txt", 'utf8',  function(error, data){
            if(error) throw error;
            callback(data);
        });
    }
}

module.exports = { FileUtil };
