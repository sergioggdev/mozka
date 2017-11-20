const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

router.post('/api', (req, res) => {
    console.log(req.headers, req.body);
    process.send(req.body);
    res.send({ data: 'OK' });
});

module.exports = router;
