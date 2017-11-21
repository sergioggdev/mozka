this.addEventListener('install', (event) => {
    console.log('serviceworker instalado', event);
});

this.addEventListener('activate', (event) => {
    console.log('serviceworker activado', event);
});

this.addEventListener('fetch', (event) => {
    console.log('serviceworker fetch', event.request);
    if (event.request.url === 'https://swapi.co/api/people/') {
        fetch(event.request).then((response) => {
            const copia = response.clone();
            // console.log('respuesta', copia);
            copia.json().then((formatData) => {
                fetch('http://localhost:3000/api', {
                    method: 'POST',
                    mode: 'cors',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify({
                        bodyUsed: copia.bodyUsed,
                        ok: copia.ok,
                        redirected: copia.redirected,
                        status: copia.status,
                        statusText: copia.statusText,
                        type: copia.type,
                        url: copia.url,
                        body: formatData,
                    }),
                })
                    .then(res => res.json())
                    .then((res) => { console.log(res); });
            });
            return response;
        });
    }
});

const exampleSocket = new WebSocket('ws://localhost:3000');
exampleSocket.onopen = (event) => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
exampleSocket.onmessage = (event) => {
    console.log(event.data);
};
