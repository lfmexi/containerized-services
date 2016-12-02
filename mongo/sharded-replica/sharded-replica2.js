// Execute this one on the second sharded replica set
rs.initiate( { _id: "mgdb_repl2", members: [ { _id : 0, host : "mgdb01_repl2:27018" }, { _id : 1, host : "mgdb02_repl2:27018" }, { _id : 2, host : "mgdb03_repl2:27018" } ] } );
