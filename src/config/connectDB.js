const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '217.21.85.1',
    user: 'jvmm7625_91clubdemo',
    password: 'jvmm7625_91clubdemo',
    database: 'jvmm7625_91clubdemo1',
});

export default connection;
