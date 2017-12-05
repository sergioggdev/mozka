const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.render('index', { title: 'Express' });
});

router.post('/api', (req, res) => {
    console.log('servidor', req);
    req.body.type = 'post';
    // process.send(req.body);
    res.send({ data: 'OK' });
});

module.exports = router;


/* const obj = {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
        response: {
            bodyUsed: response.bodyUsed,
            ok: response.ok,
            headers: null,
            redirected: response.redirected,
            status: response.status,
            statusText: response.statusText,
            type: response.type,
            url: response.url,
            body: formatData,
        },
        request: {
            bodyUsed: event.request.bodyUsed,
            credentials: event.request.credentials,
            headers: null,
            integrity: event.request.integrity,
            method: event.request.method,
            mode: event.request.mode,
            redirect: event.request.edirect,
            referrer: event.request.referrer,
            referrerPolicy: event.request.referrerPolicy,
            url: event.request.url,
        },
    }),
}
*/
