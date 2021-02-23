var mysql = require('mysql')
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "00000000",
})
con.connect(function(err){
    if(err) throw err;
    console.log("Node connected to mysql server")
    
})