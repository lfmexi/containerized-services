// Execute this one on the configsvr replica set

var config = { 
	_id: "mgdb_conf", 
	configsvr: true, 
	members: [ 
		{ _id: 0, host: "mgdb01_conf:27019" }, 
		{ _id: 1, host: "mgdb02_conf:27019" }, 
		{ _id: 2, host: "mgdb03_conf:27019" } 
	] 
};
rs.initiate(config);
