let entorno = false;

this.addEventListener('install', (event) => {
    console.log('serviceworker instalado', event);
});

this.addEventListener('activate', (event) => {
    console.log('serviceworker activado', event);
});

this.addEventListener('fetch', (event) => {
    // console.log('serviceworker fetch', event.request);
    if (event.request.url === 'http://localhost:3000/api') {
        console.log('fetch', event.request);
        const hola = event.request.clone();
        hola.url = 'http://localhost:3000/api';
        fetch(hola);
        fetch(event.request).then((response) => {
            // console.log('respuesta', response);
            response.json().then((formatData) => {
                // console.log('formatData', formatData);
                fetch('http://localhost:3000/api', {
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
                })
                    .then(res => res.json())
                    .then((res) => { console.log(res); });
            });
            return response;
        });
    }
});

this.addEventListener('message', (event) => {
    console.log('SW Received Message:', event);
});


// Websocket
const Socket = new WebSocket('ws://localhost:3000');

Socket.onopen = () => {
    console.log('Socket', 'Se ha abierto una session');
};

Socket.onerror = (event) => {
    console.error('Socket', event);
};

Socket.onclose = () => {
    console.log('Socket', 'Se ha cerrado la sesion');
    entorno = false;
    sendNotification({
        type: 'closeConection',
        text: 'Se ha cerrado la sesion con Mozca',
        img: 'https://icon-icons.com/icons2/860/PNG/512/wink_icon-icons.com_67813.png',
    });
};

Socket.onmessage = (event) => {
    console.log('Socket', event.data);
    const data = JSON.parse(event.data);
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


// ************ Auxiliar function ************ //
function sendNotification(data) {
    this.clients.matchAll().then((clients) => {
        clients.forEach((i) => {
            i.postMessage(data);
        });
    });
}
