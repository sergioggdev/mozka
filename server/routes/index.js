const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

router.post('/api', (req, res, next) => {
    console.log(req.headers);
    console.log(req.body);
    global.respuesta = req.body;
    res.send({ data: 'OK' });
});

module.exports = router;
