/**
 * @typedef databaseCommonConfig
 * @property {string} databaseName
 * @property {string} user
 * @property {string} password
 * @property {string} host
 * @property {?string} tableName
 * @property {"mysql", "postgre", "sqlite3", "mssql", "oracle"} client
 */

/**
 * @typedef databaseMysqlConfig
 * @property {string} databaseName
 * @property {string} user
 * @property {string} password
 * @property {string} host
 * @property {?string} tableName
 * @property {?{min:number, max:number}} pool
 */
