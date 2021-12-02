const mysql = require("mysql");
const { DB_CONFIG } = require("../constant/contant");

const connection = () => {
    const connection = mysql.createConnection(DB_CONFIG)
    connection.connect((err) => {
        if(err) throw err;
        console.log("connected!")
    });

    return connection;
}


module.exports = { Connection: connection() };