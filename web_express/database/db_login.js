const sql = require('mysql');

//dotenv로 민감한 정보 보호 가능.
const db = sql.createConnection({
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});
db.connect();

exports.db = db;
