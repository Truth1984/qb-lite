const DATABASE = require("../Database/database");
const COLUMN = require("../Column/column");

module.exports = class {
  constructor() {
    this.config.table = this;
  }

  Database() {
    /**
     * @type {DATABASE}
     */
    let db = this.config.database;
    return db;
  }

  Column() {
    return new COLUMN(this.config);
  }
};
