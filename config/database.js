const mysql = require('mysql');
const connMySQL = function () {
    console.log("Connected to Database!")
    return (connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node'
    }));
}

module.exports = function (){
    return connMySQL;
}
