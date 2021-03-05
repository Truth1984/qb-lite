require("./typedef");
const Mysql5 = require("./mysql");

module.exports = class {
  /**
   * @param {databaseCommonConfig} config
   */
  constructor(config) {
    this.config = config;
  }

  /**
   * @param {databaseMysqlConfig} config
   */
  MYSQL5(config) {
    return new Mysql5(config ? config : this.config);
  }

  SQLITE3() {
    console.log("not yet implemented");
  }

  MSSQL() {
    console.log("not yet implemented");
  }

  ORACLE() {
    console.log("not yet implemented");
  }

  POSTGRESQL() {
    console.log("not yet implemented");
  }
};
