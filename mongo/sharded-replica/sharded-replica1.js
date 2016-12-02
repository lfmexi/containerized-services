// Execute this on the first sharded replica set
var config = { _id: "mgdb_repl1", members: [ { _id : 0, host : "mgdb01_repl1:27018" }, { _id : 1, host : "mgdb02_repl1:27018" }, { _id : 2, host : "mgdb03_repl1:27018" } ] };
rs.initiate(config);
