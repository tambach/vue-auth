"use strict";
const sqlite3 = require('sqlite3').verbose();

class Db {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.dropTable()
    }

    dropTable() {
        const sql = `
            DROP TABLE userAuth`
        return this.db.run(sql);
    }
}

module.exports = Db
