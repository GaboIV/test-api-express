var express = require('express');
var db = require('../db')
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send({
        "aplicación": "MyApp",
        "hora": new Date()
    })
});

router.get('/users', async (req, res, next) => {
    try {
        let results = await db.all();
        res.send({
           results
        });
    } catch (e) {
        res.sendStatus(500);
    }
});

router.get('/products/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.send({
            "product": results
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;