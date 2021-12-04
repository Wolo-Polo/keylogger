const fs = require("fs");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "172.16.210.76",
    port: "3333",
    user: "keylogger",
    password: "keylogger",
    database: "keylogger"
});
connection.connect((err) => {
    if(err) console.log(err);

    console.log("connected!");
    fs.readdir("./data-migrate/migrate", (error, files) => {
        if(error) throw error;
    
        for(let i = 0; i < files.length; i++) {
            fs.readFile("./data-migrate/migrate" + "/" + files[i], 'utf8', (error, sqlStr) => {
                if(error) throw error;
                
                connection.query(sqlStr, (err) => {
                    if(err) throw err;
                    
                    console.log("sql: \n", sqlStr);
                    console.log("migrate: ", files[i], ", done!");

                    if(i == files.length-1) connection.destroy();
                })

            })
        }

    });
})