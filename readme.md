## expectations

```js
let conf = {
  DB_name,
  DB_user,
};
let tableName;
let clog;

let pg = new DB(conf).POSTGRESQL();

let db = new DB(conf).MYSQL8();
db.someDatabaseBasedOperation().then();
db.rawQuery().then();

let tb = new db.Table(`tableName`);
tb.Database().someDatabaseBasedOperation().then();
tb.someTableBasedOperation().then();
tb.rawQuery().then();
tb.config.DB_name;

let col = new tb.Column(`columnName`);
col.Table().someTableBasedOperation().then();
col.Table().Database().someDatabaseBasedOperation().then();
col.rawQuery().then();
col.config.DB_name;

let Q1 = tb.QB();
Q1.update(`*`).select(`*`).where("A", ">", "B").getQueryStorage().then(console.log);
clog = [
  { type: "update", value: ["*"] },
  { type: "select", value: ["*"] },
  { type: "where", value: ["A", ">", "B"] },
];

Q1.QB().getQueryStorage().then(console.log);
clog = [];

Q1.QB().select(`C`).where("A", ">", "B").getQueryString().then(console.log);
clog = "SELECT `C` FROM `tableName` WHERE `tableName`.`A` > `tableName`.`B`";

Q1.QB().select(`C`).where("A", ">", "B").thenFull(console.log);
clog = { result: [], queryStr: "SELECT `C` FROM `tableName` WHERE `tableName`.`A` > `tableName`.`B`" };

Q1.QB()
  .where("A", ">", "B")
  .select(`C`)
  .catch((e) => console.log("error"));
clog = "error";

Q1.QB()
  .select("*")
  .join((JB) => JB(`tableName2`).on("A", ">", "B").onAnd("B", "<", "100"))
  .getQueryStorage()
  .then(console.log);
clog = [
  { type: "select", value: ["*"] },
  {
    type: "join",
    method: "inner",
    value: [
      { type: "table", value: "tableName2" },
      { type: "on", value: ["A", ">", "B"] },
      { type: "onAnd", value: ["B", "<", "100"] },
    ],
  },
];
```
