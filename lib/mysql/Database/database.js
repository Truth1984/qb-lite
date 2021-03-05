const TABLE = require("../Table/table");

module.exports = class {
  constructor(config) {
    this.config = config;
    this.config.database = this;
  }

  Database() {
    return this;
  }

  Table(tableName) {
    if (tableName) {
      this.tableName = tableName;
      this.config.tableName = tableName;
    } else this.tableName = this.config.table;
    return new TABLE(this.config);
  }
};
