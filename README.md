# keylogger
keylogger -- learning nodejs

# setup
1. docker-compose up dbserver 
create docker compose and keylogger database.
2. node data-migrate/db-migrate.js
migrate table log of keylogger database.
db info:
    host: "localhost",
    port: "3333",
    user: "keylogger",
    password: "keylogger",
    database: "keylogger"