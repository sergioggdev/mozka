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
            console.log(copia);
            copia.json().then((formatData) => {
                console.log(formatData);
                fetch('http://localhost:3000/api', {
                    method: 'POST',
                    mode: 'cors',
                    headers: new Headers({ 'Content-Type': 'application/json' }),
                    body: JSON.stringify(formatData),
                })
                    .then(res => res.json())
                    .then((res) => { console.log(res); });
            });
            return response;
        });

        /* const obj = { hola: 'asda' };
        const obj2 = JSON.stringify(obj);
        const blob = new Blob([obj2], { type: 'application/json' });
        const rest = new Response(blob);
        event.respondWith(rest); */
    }
});

const exampleSocket = new WebSocket('ws://localhost:3000');
exampleSocket.onopen = (event) => {
    exampleSocket.send("Here's some text that the server is urgently awaiting!");
};
exampleSocket.onmessage = (event) => {
    console.log(event.data);
};
