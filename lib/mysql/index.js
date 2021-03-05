require("../typedef");
const Database = require("./Database/database");

module.exports = class {
  /**
   * @param {databaseMysqlConfig} config
   */
  constructor(config) {
    this.config = config;
  }

  Database() {
    return new Database(this.config);
  }
};
