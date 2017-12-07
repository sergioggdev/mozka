const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

router.all('/api', (req, res) => {
    // console.log('servidor', req.body);
    if (true) {
        fetch(req.body.url, req.body).then(response => response.json()).then((response) => {
            res.send(response);
            const obj = {
                response,
                request: req.body,
            };
            console.log(obj);
            // process.send(req.body);
        });
    } else {
        // process.send(req.body);
        // process.on('message', (response) => {
        // res.send(response);
        // });
    }
});

module.exports = router;
