var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'apuestasg',
    host: 'localhost',
    port: 3306
});

let products = {};

products.all = () => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM users ORDER BY name ASC LIMIT 50', (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

products.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM games WHERE id = ?', [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = products;