# keylogger
keylogger -- learning nodejs
# setup
1. docker-compose up dbserver  
&nbsp;&nbsp; create docker compose and keylogger database.  
2. node data-migrate/db-migrate.js  
&nbsp;&nbsp; migrate table log of keylogger database.  
&nbsp;&nbsp; db info:  
&nbsp;&nbsp;&nbsp;&nbsp; host: "localhost",  
&nbsp;&nbsp;&nbsp;&nbsp; port: "3333",  
&nbsp;&nbsp;&nbsp;&nbsp; user: "keylogger",  
&nbsp;&nbsp;&nbsp;&nbsp; password: "keylogger",  
&nbsp;&nbsp;&nbsp;&nbsp; database: "keylogger"
# run
node app.js
# docs
View all log: [here](http://localhost:9999/keyloggers)  
API get logs: [here](http://localhost:9999/api/v1/keyloggers)  
API export logs to csv: [here](http://localhost:9999/api/v1/keyloggers/export)
