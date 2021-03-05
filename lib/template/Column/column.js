const TABLE = require("../Table/table");

module.exports = class {
  constructor(config) {
    this.config = config;
    this.config.column = this;
  }

  Table() {
    /**
     * @type {TABLE}
     */
    let tb = this.config.table;
    return tb;
  }
};
