const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '217.21.85.1',
    user: 'jvmm7625_adcasino',
    password: 'jvmm7625_adcasino',
    database: 'jvmm7625_adcasino',
});

export default connection;
