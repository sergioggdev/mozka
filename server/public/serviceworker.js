let entorno = false;

this.addEventListener('install', (event) => {
    console.log('serviceworker instalado', event);
});

this.addEventListener('activate', (event) => {
    console.log('serviceworker activate', event);
});

this.addEventListener('fetch', (event) => {
    console.log('serviceworker fetch', event.request);
    if (true) {
        if (!event.request.url.includes(event.request.referrer)) {
            // console.log('fetch', event.request);
            event.respondWith(serialize(event.request.clone()).then((obj) => {
                return fetch('http://localhost:3000/api', {
                    method: 'POST',
                    mode: 'cors',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(obj),
                });
            }));
        } else {
            event.respondWith(fetch(event.request));
        }
    } else {
        event.respondWith(fetch(event.request));
    }
});


this.addEventListener('message', (event) => {
    console.log('SW Received Message:', event.data);

    // Websocket
    const url = event.data.replace('http', 'ws');
    const Socket = new WebSocket(url);
    Socket.onopen = () => { console.log('Socket', 'Se ha abierto una session'); };
    Socket.onerror = (err) => { console.error('Socket', err); };

    Socket.onclose = () => {
        console.log('Socket', 'Se ha cerrado la sesion con Mozca');
        entorno = false;
        sendNotification({
            type: 'closeConection',
            text: 'Se ha cerrado la sesion con Mozca',
            img: 'http://2.bp.blogspot.com/-CnnX6EglcmM/U5XWoubzCtI/AAAAAAAAIKw/mU_9oDtBs6I/s1600/crying-smiley.png',
            data: null,
        });
    };

    Socket.onmessage = (msg) => {
        console.log('Socket', msg.data);
        const data = JSON.parse(msg.data);
        if (!data.text && !data.img && !data.type) { throw new Error('El obj del mensaje esta incompleto'); }
        switch (data.type) {
        case 'startServer':
            entorno = true;
            sendNotification(data);
            break;
        case 'stopServer':
            entorno = false;
            sendNotification(data);
            break;
        default:
            break;
        }
    };
});


// ************ Auxiliar function ************ //
function sendNotification(data) {
    this.clients.matchAll().then((clients) => {
        clients.forEach((i) => {
            i.postMessage(data);
        });
    });
}


function serialize(request) {
    const headers = {};
    for (const entry of request.headers.entries()) {
        headers[entry[0]] = entry[1];
    }
    const serialized = {
        url: request.url,
        bodyUsed: request.bodyUsed,
        headers,
        method: request.method,
        mode: request.mode,
        integrity: request.integrity,
        credentials: request.credentials,
        cache: request.cache,
        redirect: request.redirect,
        referrer: request.referrer,
        referrerPolicy: request.referrerPolicy,
    };
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        return request.clone().text().then((body) => {
            serialized.body = body;
            return Promise.resolve(serialized);
        });
    }
    return Promise.resolve(serialized);
}
