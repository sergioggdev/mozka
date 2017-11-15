console.log('Codigo dentro de service worker');

this.addEventListener('install', (event) => {
    console.log('serviceworker instalado', event);
});

// console.log(WebSocket);
const exampleSocket = new WebSocket('ws://www.example.com/socketserver');
